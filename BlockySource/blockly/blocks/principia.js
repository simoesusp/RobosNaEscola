goog.provide('Blockly.Blocks.Principia');

goog.require('Blockly.Blocks');

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(35);
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
    this.setColour(0);
    this.appendDummyInput()
        .appendField("ESP32_OTA_Server")
        .appendField(new Blockly.FieldImage("https://uploads.filipeflop.com/2017/11/6WL55_1.jpg", 64, 64));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Cria todo o codigo para o ESP32 com OTA Server.');
  }
};

Blockly.Blocks['Principia_delay_ESP'] = {
  init: function() {
    this.setColour(35);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Delay")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Delay com OTA handle');
  }
};
