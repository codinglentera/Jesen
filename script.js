:root{
  --bg:#071028;
  --panel:#0b2238;
  --accent:#ffcc33;
  --accent2:#ff6666;
  --text:#e6f0ff;
}

*{box-sizing:border-box; margin:0; padding:0; font-family:Inter, system-ui, Arial, sans-serif}
html,body{height:100%}
body{
  background: linear-gradient(180deg, #00111f 0%, #042233 100%);
  color:var(--text);
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:12px;
  padding:18px;
}

/* Canvas */
canvas#game{
  background: linear-gradient(180deg, rgba(3,15,30,0.8), rgba(0,6,12,0.9));
  width: 800px;
  height: 600px;
  max-width: 95vw;
  max-height: 75vh;
  border-radius:10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
}

/* UI */
.ui{
  width:800px;
  max-width:95vw;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.info{display:flex; gap:12px; font-weight:600}
.controls{display:flex; gap:8px}
.controls button{
  background:var(--panel);
  color:var(--text);
  border:1px solid rgba(255,255,255,0.03);
  padding:8px 12px;
  border-radius:8px;
  cursor:pointer;
}
.controls button:hover{transform:translateY(-1px)}

/* Mobile touch controls */
.touch-controls{
  display:none;
  width:100%;
  max-width:800px;
  justify-content:center;
  gap:18px;
}
.tc-btn{
  background:rgba(255,255,255,0.06);
  border:none;
  color:var(--text);
  padding:12px 18px;
  border-radius:10px;
  font-size:18px;
  user-select:none;
}
@media (max-width:700px){
  .touch-controls{display:flex}
  canvas#game{height:60vh}
  .ui{flex-direction:column; align-items:flex-start; gap:8px}
}
