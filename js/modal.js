function CustomAlert(){
    this.alert = function () {
      document.body.innerHTML =
        document.body.innerHTML +
        `<div id="dialogoverlay"></div>
        <span id="wrap">
            <h1>Agradecemos pelo seu Feedback!</h1>
        </span>
        `;
  
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let wrapModal = document.getElementById('wrap');
      let winH = window.innerHeight;
  
      dialogoverlay.style.height = winH + 'px';
      dialogoverlay.style.display = 'block';
      wrapModal.style.display = 'block';
  
    };
  
    this.ok = function () {
        document.getElementById('wrap').style.display = 'none';
        document.getElementById('dialogoverlay').style.display = 'none';
    };
  }
  
export const customAlert = new CustomAlert();
  