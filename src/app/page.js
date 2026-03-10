import Image from "next/image";

export default function Home() {
  return (
    
    <div className="bg-[#ff0000] flex flex-col justify-center items-center min-h-screen">

      <div className="bg-green-500 w-50 h-25 m-10 rounded justify-center items-center flex">

      <p className="text-white" font-> Caixa 1</p>

      </div>

      <div className="bg-yellow-500 w-50 h-25 m-10 rounded justify-center items-center flex">

        <p>Caixa 2 </p>

      </div>

      <div>


        <button className="bg-[#fcba03]">

          <p> Clique Aqui </p>

        </button>

      </div>

  
    </div>

  );
}
