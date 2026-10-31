let key = ""
keypad.setKeyPad4(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8,
DigitalPin.P12,
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15
)
I2C_LCD1602.LcdInit(39)
motor.servo(motor.Servos.S1, 0)
let password = "2263"
I2C_LCD1602.ShowString(" password", 0, 0)
let user_password = ""
basic.forever(function () {
    key = keypad.getKeyString()
    I2C_LCD1602.ShowString(user_password, 0, 1)
    if (password == "" + user_password + keypad.getKeyString()) {
        if (password == user_password) {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("login sucess", 0, 0)
            motor.servo(motor.Servos.S1, 90)
        } else {
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("login failure", 0, 1)
            motor.servo(motor.Servos.S1, 0)
        }
    }
})
