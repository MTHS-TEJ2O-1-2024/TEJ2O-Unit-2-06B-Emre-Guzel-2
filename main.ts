/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel 
 * Created on: Sep 27 2024
 * This program runs single Led 
*/
//basic.showString('Hello, World!')

//setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16,0)
basic.showIcon(IconNames.Happy)

//trun on LED
input.onButtonPressed(Button.A,function(){
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16,1)
})
//LED of 
input.onButtonPressed(Button.B,function(){
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16,0)
})