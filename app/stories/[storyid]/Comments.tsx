'use client'
export default function Comments() {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          (document.getElementById('more_comments_modal')! as any).showModal()
        }
      >
        Show more
      </button>
      <dialog id="more_comments_modal" className="modal">
        <div className="modal-box">hello (esc to leave)</div>
      </dialog>
    </>
  )
}
