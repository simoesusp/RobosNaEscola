int contagem;

int countSilencio;

int countBarulho;

void setup()
{
  Serial.begin(9600);

  pinMode(11, OUTPUT);
  pinMode(13, OUTPUT);
  pinMode(10, INPUT);
}


void loop()
{
  Serial.println("Começou!");
  digitalWrite(11, LOW);
  digitalWrite(13, LOW);
  contagem = 5;
  countSilencio = 0;
  countBarulho = 0;
  Serial.println("Fim Setup");
  while (HIGH) {
    while (countBarulho < 30) {
      digitalWrite(13, HIGH);
      if (digitalRead(10) == LOW) {
        countBarulho = countBarulho + 1;

      }
      delay(10);
    }
    countSilencio = 0;
    countBarulho = 0;
    contagem = contagem - 1;
    if (contagem == 0) {
      Serial.println("FOGO!!");
      digitalWrite(13, LOW);
      digitalWrite(11, HIGH);
      delay(400);
      digitalWrite(13, HIGH);
      digitalWrite(11, LOW);
      delay(200000);

    }
    while (countSilencio < 250) {
      digitalWrite(13, LOW);
      if (digitalRead(10) == HIGH) {
        countSilencio = countSilencio + 1;

      }
      if (digitalRead(10) == LOW) {
        countBarulho = countBarulho + 1;

      }
      if (countBarulho > 5) {
        countSilencio = 0;
        countBarulho = 0;

      }
      delay(10);
    }
    countSilencio = 0;
    countBarulho = 0;
    Serial.println("Passou!");
    Serial.println(contagem);
  }

}