#include <Wire.h>
#include "TSL2561.h"
#include <LibHumidity.h>
#include <SHT1x.h>


#define DS1307_I2C_ADDRESS 0x68
#define on HIGH
#define off LOW


byte second, minute, hour, dayOfWeek, dayOfMonth, month, year;
float temp , humi, light , soil , vpd ;
//float temp , humi , light, soil , vpd;
TSL2561 tsl(TSL2561_ADDR_FLOAT);
LibHumidity humidity = LibHumidity(0);
SHT1x sht1x(8, 9);

const int staion = 0;
long printTime = 0 , printInterval = 500;
long detectingTime = 0 , detectingInterval = 500;
String setpointStr = "";
String cmd = "";
int stage = 1;

int relaych[4] = {4, 5, 6, 7};

float channel[4][6];

String str, t, d, rstr, a;
char ch ;
extern int  __bss_end;
extern int  *__brkval;

void setup() {

  Wire.begin();
  //  Serial.begin(9600);

  Serial1.begin(9600);
  Serial1.println("Init");

  tsl.setGain(TSL2561_GAIN_16X);
  tsl.setTiming(TSL2561_INTEGRATIONTIME_13MS);

  for (int i = 0 ; i < 4 ; i++) {
    pinMode(relaych[i] , OUTPUT);
  }

  for (int i = 0 ; i < 4 ; i++) {
    digitalWrite(relaych[i], off);
  }
}


void loop() {

  while (Serial1.available()) {
    ch = Serial1.read();
    cmd += ch;
    if (cmd.endsWith("REQ")) {
      cmd = "";
      //Serial.println("[REQ] from node");
      sendSensor();
      Serial1.flush();
    }
    if (cmd.endsWith("DATETIME")) {
      //Serial.println("[DATETIME] fomr node");
      cmd = "";
      bool flag = true;

      while (true) {
        while (Serial1.available()) {
          ch = Serial1.read();
          cmd += ch;
          if (cmd.endsWith("}")) {
            String rstr = cmd;
            rstr.replace("{" , "");
            rstr.replace("}" , "");
            rstr.replace("DATETIME", "");
            int data[5] = {0, 0, 0, 0, 0};
            int i = 0 , si = 0 , ei, j = 0;
            while (j < 5) {
              int index = rstr.indexOf(",");
              String a =  rstr.substring(0 , index);
              data[j] = a.toInt();
              si = index;
              rstr = rstr.substring(index + 1);
              j++;
            }
            //second, min,hour, dow,dom, month,year
            setDateDs1307(0, data[4], data[3], 6, data[0], data[1], data[2]);
            flag = false;
          }
        }
        if (!flag) {
          Serial1.flush();
          break;
        }
      }

    }
    if (cmd.endsWith("RELAY")) {
      cmd = "";
      bool flag = true;
      while (true) {
        while (Serial1.available()) {
          ch = Serial1.read();
          cmd += ch;
          if (cmd.endsWith("}")) {
            String rstr = cmd;
            rstr.replace("{" , "");
            rstr.replace("}" , "");
            rstr.replace("RELAY", "");
            int i = 0 , si = 0 , ei;
            int data[2] = {0, 0};
            int j = 0;
            while (j < 2) {
              int index = rstr.indexOf(",");
              String a =  rstr.substring(0 , index);
              data[j] = a.toInt();
              si = index;
              rstr = rstr.substring(index + 1);
              j++;
            }
            cmd = "";
            rstr = "";
            int val = (data[1] == 1) ? off : on;
            digitalWrite(relaych[data[0] - 1] , val);
            flag = false;
          }
        }

        if (!flag) {
          Serial1.flush();
          break;
        }
      }
    }

  }
}

void sendSensor() {
  float temp = humidity.GetTemperatureC();
  float humi = humidity.GetHumidity();
  float light = getLight();
  float soil = getSoil();
  float vpd = getVpd(temp , humi);
  getDateDs1307();



  String t = ((hour < 10) ? "0" : "") + String(hour) + ":" + ((minute < 10) ? "0" : "") + String(minute);
  String d =  String(dayOfMonth) + "/" + String(month) + "/" + String(year);
  str = "{";
  str += " \"time\": \"" + t + "\",";
  str += " \"date\": \"" + d + "\",";
  str += " \"temp\": " + String(temp) + ",";
  str += " \"humi\": " + String(humi) + ",";
  str += " \"light\": " + String(light) + ",";
  str += " \"soil\": " + String(soil) + ",";
  str += " \"vpd\": " + String(vpd) + "";
  str += "}";
  //    String str = t + "," + d + "," + temp + "," + humi + "," + light + "," + soil + "," + vpd + "," + freemem();
  Serial1.println(str);
}

float getVpd(float t , float rh) {
  float spv = (610.7) * pow(10, ( (7.5 * t) / (237.3 + t)));
  return (1 - (rh / 100)) * spv;
}

uint32_t getLight() {
  uint16_t x = tsl.getLuminosity(TSL2561_VISIBLE);
  uint32_t lum = tsl.getFullLuminosity();
  uint16_t ir, full, vis;
  ir = lum >> 16;
  full = lum & 0xFFFF;
  vis = tsl.calculateLux(full, ir);
  return vis;
}

float getSoil() {
  return sht1x.readHumidity();
}

void setDateDs1307(byte s , byte m , byte h , byte dow , byte dom , byte mo , byte y)
{
  Wire.beginTransmission(DS1307_I2C_ADDRESS);
  Wire.write(decToBcd(0));
  Wire.write(decToBcd(s)); // 0 to bit 7 starts the clock
  Wire.write(decToBcd(m));
  Wire.write(decToBcd(h)); // If you want 12 hour am/pm you need to set
  // bit 6 (also need to change readDateDs1307)
  Wire.write(decToBcd(dow));
  Wire.write(decToBcd(dom));
  Wire.write(decToBcd(mo));
  Wire.write(decToBcd(y));
  Wire.endTransmission();
}
void getDateDs1307()
{

  Wire.beginTransmission(DS1307_I2C_ADDRESS);
  Wire.write(decToBcd(0));
  Wire.endTransmission();
  Wire.requestFrom(DS1307_I2C_ADDRESS, 7);
  second = bcdToDec(Wire.read() & 0x7f);
  minute = bcdToDec(Wire.read());
  hour = bcdToDec(Wire.read() & 0x3f); // Need to change this if 12 hour am/pm
  dayOfWeek = bcdToDec(Wire.read());
  dayOfMonth = bcdToDec(Wire.read());
  month = bcdToDec(Wire.read());
  year = bcdToDec(Wire.read());

  ////Serial.println(String(hour) + ":"+String(minute)+":"+String(second));
}

byte decToBcd(byte val) {
  return ( (val / 10 * 16) + (val % 10) );
}
byte bcdToDec(byte val) {
  return ( (val / 16 * 10) + (val % 16) );
}


int freemem()
{
  int free_memory;
  if ((int)__brkval == 0)
    free_memory = ((int)&free_memory) - ((int)&__bss_end);
  else
    free_memory = ((int)&free_memory) - ((int)__brkval);
  return free_memory;
}
