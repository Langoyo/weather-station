
import board
import digitalio
import adafruit_character_lcd.character_lcd as character_lcd

lcd_rs        = 22 
lcd_en        = 18
lcd_d4        = 16
lcd_d5        = 11
lcd_d6        = 12
lcd_d7        = 15
lcd_backlight = 4
lcd_columns = 16
lcd_rows = 2

lcd_rs = digitalio.DigitalInOut(board.D22)
lcd_en = digitalio.DigitalInOut(board.D18)
lcd_d7 = digitalio.DigitalInOut(board.D25)
lcd_d6 = digitalio.DigitalInOut(board.D12)
lcd_d5 = digitalio.DigitalInOut(board.D11)
lcd_d4 = digitalio.DigitalInOut(board.D16)
lcd_backlight = digitalio.DigitalInOut(board.D4)
lcd = character_lcd.Character_LCD_Mono(lcd_rs, lcd_en, lcd_d4, lcd_d5, lcd_d6, lcd_d7, lcd_columns, lcd_rows, lcd_backlight)
lcd.message = "Hello\nCircuitPython"

lcd.clear()