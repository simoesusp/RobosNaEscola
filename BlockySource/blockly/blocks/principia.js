goog.provide('Blockly.Blocks.Principia');

goog.require('Blockly.Blocks');

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(230);
    this.appendValueInput("CONTENT", 'String')
        .appendField("Serial Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
  }
};

Blockly.Blocks['ESP32_OTA_Server'] = {
  //helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
        .appendField("ESP32_OTA_Server");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Cria todo o codigo para o ESP32 com OTA Server.');
  }
};
