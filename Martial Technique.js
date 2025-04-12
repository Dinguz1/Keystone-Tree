
window.addEventListener("DOMContentLoaded", () => {

    new LeaderLine(

      document.getElementById("skill1"),
      document.getElementById("skill2"),
      { color: '#999', path: 'straight' }

    );
  
    new LeaderLine(

      document.getElementById("skill1"),
      document.getElementById("skill3"),
      { color: '#999', path: 'straight' }

    );
    
  });
