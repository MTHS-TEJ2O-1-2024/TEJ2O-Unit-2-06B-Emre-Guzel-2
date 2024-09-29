"""
Created by: Emre Guzell
Created on: Sep 28 2024
This module is a Micro:bit MicroPython program runs on and of single LED
"""

from microbit import *

# seting it up

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.get_presses():
        pin16.write_digital(1)
    display.show(Image.YES)
    if button_b.get_presses(0):
        pin16.write_digital
    display.show(Image.NO)
