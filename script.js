body {
  background-color: pink;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
  margin-top: 100px;
}

#popup h1 {
  color: red;
  font-size: 2.5em;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  position: relative;
}

button svg {
  margin-bottom: 5px;
}

/* Broken heart shake animation */
#no:hover svg {
  animation: shake 0.3s infinite;
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

/* GIF container centered + fade-in */
#gif-container {
  display: none;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: fadeIn 2s forwards;
}

#gif-container img {
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Cupids floating */
.cupid-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  display: none;
}

.cupid {
  position: absolute;
  animation: floatCupid linear infinite;
}

.cupid:nth-child(1) {
  width: 60px;
  left: 10%;
  animation-duration: 18s;
  animation-delay: 0s;
}
.cupid:nth-child(2) {
  width: 90px;
  left: 30%;
  animation-duration: 22s;
  animation-delay: 4s;
}
.cupid:nth-child(3) {
  width: 70px;
  left: 55%;
  animation-duration: 20s;
  animation-delay: 8s;
}
.cupid:nth-child(4) {
  width: 100px;
  left: 75%;
  animation-duration: 25s;
  animation-delay: 12s;
}

@keyframes floatCupid {
  0%   { top: 100%; opacity: 0; transform: translateX(0) rotate(0deg); }
  20%  { opacity: 1; }
  40%  { transform: translateX(40px) rotate(10deg); opacity: 0.9; }
  60%  { transform: translateX(-30px) rotate(-10deg); opacity: 0.8; }
  80%  { transform: translateX(20px) rotate(5deg); opacity: 1; }
  100% { top: -20%; opacity: 0; transform: translateX(-40px) rotate(-15deg); }
}

/* Arrows/Hearts shooting */
.arrow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  display: none;
}

.arrow, .heart {
  position: absolute;
  font-size: 24px;
  opacity: 0;
  animation: shootArrow 3s linear forwards;
}

.arrow::before {
  content: "➶";
  color: red;
}

.heart::before {
  content: "♥";
  color: hotpink;
}

@keyframes shootArrow {
  0%   { transform: translate(0,0) scale(1); opacity: 1; }
  100% { transform: translate(500px,-300px) scale(1.5); opacity: 0; }
}

