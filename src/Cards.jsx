function Inicio() {
  return (
    <>
      <TarjetaComponent 
        imagen={husky} 
        titulo="Husky Siberiano"
        descripcion="Los huskys son perritos energéticos y amigables, conocidos por sus hermosos ojos azules y temperamento leal."
      />
      <TarjetaComponent 
        imagen={golden} 
        titulo="Golden Retriever"
        descripcion="Los golden retriver son perritos inteligentes y cariñosos, perfectos como compañeros familiares. Excelentes nadadores."
      />
      <TarjetaComponent 
        imagen={rott} 
        titulo="Rottweiler"
        descripcion="Los rottweiler son perritos fuertes y protectores, leales a su familia. Requieren educación y socialización temprana."
      />
    </>
  );
}