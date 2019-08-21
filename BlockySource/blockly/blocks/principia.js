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

Blockly.Blocks['TiraTampa_Frente'] = {
  init: function() {
    this.setColour(35);
    this.appendValueInput("VELOCIDADE", 'Number')
        .appendField("Tira Tampa Frente")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Faz o Tira Tampa andar para frente.');
  }
};


Blockly.Blocks['TiraTampa_Direita'] = {
  init: function() {
    this.setColour(35);
    this.appendDummyInput()
        .appendField("Tira Tampa Direita");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Vira o Tira Tampa virar para Direita.');
  }
};


Blockly.Blocks['TiraTampa_Esquerda'] = {
  init: function() {
    this.setColour(35);
    this.appendDummyInput()
        .appendField("Tira Tampa Esquerda");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Vira o Tira Tampa virar para Esquerda.');
  }
};

Blockly.Blocks['TiraTampa_Para'] = {
  init: function() {
    this.setColour(35);
    this.appendDummyInput()
        .appendField("Tira Tampa Para");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Para o Tira Tampa.');
  }
};

//Gambiarra
Blockly.Blocks['Fim'] = {
  init: function() {
    this.setColour(0);
    this.appendDummyInput()
        .appendField("Fim");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setTooltip('Encera a \'void loop\'.');
  }
};
