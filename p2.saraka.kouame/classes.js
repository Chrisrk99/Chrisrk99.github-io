class Drag_Box{
  constructor(s, posX, posY, fill, text, text_fill) {
      this.s = s
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
      this.drag = false
      this.offsetX = 0
      this.offsetY = 0
      this.type = 'box'
  }

  display(){
      this.over()
      this.update()
      this.is_over ? fill(150): fill(this.fill)
      square(this.posX, this.posY, this.s)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX + (this.s/2), this.posY + (this.s/2))
  }

  update() {
      if (this.drag) {
          this.posX = mouseX + this.offsetX;
          this.posY = mouseY + this.offsetY;
      }
  }

  over(){
      if (mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s){
          this.is_over = true;
      }
      else this.is_over = false
  }

  _pressed() {
      if (mouseX > this.posX && mouseX < this.posX + this.s && mouseY > this.posY && mouseY < this.posY + this.s) {
          this.drag = true;
          this.offsetX = this.posX - mouseX;
          this.offsetY = this.posY - mouseY;
      }
  }

  released(){
      this.drag = false;
  }

}

class Drag_Rect{
  constructor(w, h, posX, posY, fill, text, text_fill) {
      this.w = w
      this.h = h
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
      this.drag = false
      this.offsetX = 0
      this.offsetY = 0
      this.type = 'rect'
  }

  display(){
      this.over()
      this.update()
      this.is_over ? fill(150): fill(this.fill)
      rect(this.posX, this.posY, this.w, this.h)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX + (this.w/2), this.posY + (this.h/2))
  }

  update() {
      if (this.drag) {
          this.posX = mouseX + this.offsetX;
          this.posY = mouseY + this.offsetY;
      }
  }

  over(){
      if( mouseX >= this.posX && mouseX <= this.posX + this.w && mouseY >= this.posY && mouseY <= this.posY + this.h){
          this.is_over = true;
      }
      else this.is_over = false;
  }


  _pressed() {
      if (mouseX > this.posX && mouseX < this.posX + this.w && mouseY > this.posY && mouseY < this.posY + this.h) {
          this.drag = true;
          this.offsetX = this.posX - mouseX;
          this.offsetY = this.posY - mouseY;
      }
  }

  released(){
      this.drag = false;
  }

}

class Drag_Cir{
  constructor(d, posX, posY, fill, text, text_fill) {
      this.d = d
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
      this.drag = false
      this.offsetX = 0
      this.offsetY = 0
      this.type = 'cir'
  }


  display(){
      this.over()
      this.update()
      this.is_over ? fill(150): fill(this.fill)
      ellipse(this.posX, this.posY, this.d)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX, this.posY)
  }

  update() {
      if (this.drag) {
          this.posX = mouseX + this.offsetX;
          this.posY = mouseY + this.offsetY;
      }
  }

  over(){
      if( dist(mouseX, mouseY, this.posX, this.posY) < this.d/2){
          this.is_over = true;
      }
      else this.is_over = false;
  }


  _pressed() {
      if ( dist(mouseX, mouseY, this.posX, this.posY) < this.d/2) {
          this.drag = true;
          this.offsetX = this.posX - mouseX;
          this.offsetY = this.posY - mouseY;
      }
  }

  released(){
      this.drag = false;
  }

}


class Drop_Cir{
  constructor(d, posX, posY, fill, text, text_fill) {
      this.d = d
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
      this.drag = false
      this.offsetX = 0
      this.offsetY = 0
      this.type = 'cir'
  }

  display(){
      this.over()
      this.is_over ? fill(200): fill(this.fill)
      ellipse(this.posX, this.posY, this.d)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX, this.posY)
  }

  over(){
      if( dist(mouseX, mouseY, this.posX, this.posY) < this.d/2){
          this.is_over = true;
      }
      else this.is_over = false;
  }
}


class Drop_Box{
  constructor(s, posX, posY, fill, text, text_fill) {
      this.s = s
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
      this.drag = false
      this.offsetX = 0
      this.offsetY = 0
      this.type = 'box'
  }

  display(){
      this.over()
      this.is_over ? fill(200): fill(this.fill)
      square(this.posX, this.posY, this.s)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX + (this.s/2), this.posY + (this.s/2))
  }

  over(){
      if( mouseX > this.posX && mouseX < this.posX + this.s && mouseY > this.posY && mouseY < this.posY + this.s){
          this.is_over = true;
      }
      else this.is_over = false;
  }
}

class Box{
  constructor(s, r, posX, posY, fill, text, text_fill) {
      this.s = s
      this.r = r
      this.posX = posX
      this.posY = posY
      this.fill = fill
      this.text = text
      this.text_fill = text_fill
      this.is_over = false
  }

  display(){
      this.check_mouseover()
      this.is_over ? fill(200) :fill(this.fill)
      square(this.posX, this.posY, this.s, this.r, this.r, this.r, this.r)
      fill(this.text_fill)
      textAlign(CENTER, CENTER)
      text(this.text, this.posX + (this.s/2), this.posY + (this.s/2))
  }

  check_mouseover(){
      if (mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s){
          this.is_over = true
      }
      else this.is_over = false

      return this.is_over;
  }
}
