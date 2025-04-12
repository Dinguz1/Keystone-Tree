
window.addEventListener("DOMContentLoaded", () => {

  const anc = (opt) => LeaderLine.pointAnchor(opt, {x: "50%", y: "50%"})
  const con = { color: '#999', path: 'straight', endPlug: 'behind'}

  new LeaderLine(anc(skr), anc(sk2), con);
  new LeaderLine(anc(skr), anc(sk3), con);
  new LeaderLine(anc(sk2), anc(sk4), con);

});
