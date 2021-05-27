from RPLCD import CharLCD
from RPi import GPIO
lcd = CharLCD(numbering_mode=GPIO.BOARD, cols=16, rows=1, pin_rs=22, pin_e=18, pins_data=[16, 11, 12, 15])
lcd.write_string(u'Hello world!')