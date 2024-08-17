import { useState } from "react"
import { TfiReload } from "react-icons/tfi";
import { CgCompressRight } from "react-icons/cg";

const Modal = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings",
    })

    const random = () => {
      const select = quotes[Math.floor(Math.random()*quotes.length)]
      setQuote(select);
    }

    loadQuotes();

    return (
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-lg rounded-md max-w-sm" onClick={()=>document.getElementById('my_modal_5').showModal()}>Motivation</button>
<dialog id="my_modal_5" className="modal modal-bottom bg-transparent sm:modal-middle">
  <div className="modal-box shadow-2xl border-4 rounded-md border-white">
    <h3 className="font-bold text-lg">Semangat Calon Mahasiswa NUS!</h3>
    <p className="py-4">{quote.text}</p>
    <p> - {quote.author.split(',')[0]}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
      <div className="btn btn-sm btn-circle hover:rounded-full">
      <TfiReload onClick={() => {random()}} />
      </div>
        <button className="btn btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><CgCompressRight /></button>
      </form>
    </div>
      
  </div>
</dialog></>
    )
}

export default Modal