import { TfiReload } from "react-icons/tfi";
import { CgCompressRight } from "react-icons/cg";

const Modal = () => {
const quote = {
  text: "Just do it.",
  author: "Vincentius Gian Junius",
}
  return (
    <>
      <button 
        className="btn btn-lg rounded-md max-w-sm"
        onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        Motivation
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom bg-transparent sm:modal-middle">
        <div className="modal-box shadow-2xl border-4 rounded-md border-white">

          <h3 className="font-bold text-lg">
            Semangat Calon Mahasiswa UofT Mississauga!
          </h3>

          <p className="py-4">{quote.text}</p>
          <p>- {quote.author}</p>

          <div className="modal-action">
            <form method="dialog">

              <div className="btn btn-sm btn-circle hover:rounded-full">
                <TfiReload />
              </div>

              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <CgCompressRight />
              </button>

            </form>
          </div>

        </div>
      </dialog>
    </>
  )
}

export default Modal
