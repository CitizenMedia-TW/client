// TODO: implement backend services and darkmode
import React from 'react'
import { BsExclamationCircle, BsExclamationTriangle } from 'react-icons/bs'

export default function Account() {
  const [password, setPassword] = React.useState<string>('')
  const [newPassword, setNewPassword] = React.useState<string>('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState<string>('')

  // TODO: implement reset password

  const changeEmail = async () => {
    window.alert('Change Email')
  }
  const forgetPassword = async () => {
    window.alert('Forget Password')
  }

  const resetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      window.alert('Passwords do not match')
      return
    } else {
      window.alert(
        `Password reset (not really)\n ${password} -> ${newPassword}`
      )
      return
    }
  }
  const email: String = 'gmailgmail@gmail.com'

  const deactivateAccount = async () => {
    const userPasswd = 'example'
    if (password !== userPasswd || userPasswd == undefined) {
      window.alert('Passwords do not match')
      return
    } else {
      window.alert(`Deactivate the Account:\n${email}`)
    }
  }

  const deleteAccount = async () => {
    const userPasswd = 'example'
    if (password !== userPasswd || userPasswd == undefined) {
      window.alert('Passwords do not match')
      return
    } else {
      window.alert(`Delete the Account:\n${email}`)
    }
  }

  return (
    <div>
      <section className="flex flex-col pl-28">
        <section className="mt-16 mb-12">
          {<p className="text-blue-950  font-bold text-lg">E-Mail</p>}
          <section className="flex flex-row my-3 ">
            <section className=" w-80">
              {<p className="text-blue-950 left-10">{email}</p>}
            </section>
            <section className="w-80" />
            <button
              className="bg-transparent border-2 border-slate-400 h-6 w-28 rounded btn-info"
              onClick={() => changeEmail()}
            >
              <p className=" text-slate-500 text-sm">Change email</p>
            </button>
          </section>
        </section>
        <section className="">
          {<p className="text-blue-950 font-bold text-lg mb-5">Password</p>}
          <div className=" pl-10 ">
            <section className="flex flex-row  my-3">
              <section className=" w-48">
                <p className="text-blue-950">Current password</p>
              </section>
              <input
                type="password"
                placeholder="current password"
                className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-transparent"
                onClick={() => forgetPassword()}
              >
                <p className="ml-3 text-cyan-800 text-xs">Forget password?</p>
              </button>
            </section>

            <section className="flex flex-row my-3">
              <section className=" w-48">
                {<p className="text-blue-950">New password</p>}
              </section>
              <input
                type="password"
                placeholder="new password"
                className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </section>

            <section className="flex flex-row my-3">
              <section className="w-48">
                {<p className="text-blue-950 ">Confirm new password</p>}
              </section>
              <input
                type="password"
                placeholder="confirm new password"
                className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <section className=" w-48"></section>
              <button
                className="bg-slate-400 h-6 w-20 rounded btn-accent"
                onClick={() => resetPassword()}
              >
                <p className="text-white text-sm">Confirm</p>
              </button>
            </section>
          </div>
        </section>
      </section>

      <section className="flex flex-col pl-16">
        <hr className="mt-10 mb-6 h-1 bg-slate-600" />
      </section>

      <section className="flex flex-col pl-28">
        <section flex-col bg-yellow-50>
          <button
            className="bg-transparent"
            onClick={() =>
              (document.getElementById('deactivateModal')! as any).showModal()
            }
          >
            <p className="my-2 text-rose-700">Deactivate account</p>
          </button>
          <dialog id="deactivateModal" className="modal">
            <div className="modal-box bg-white w-11/12 max-w-2xl h-96">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-md btn-circle btn-ghost absolute right-4 top-4 text-slate-400">
                  <p className="text-2xl">✕</p>
                </button>
              </form>
              <div className="p-12">
                <p className="mb-4 text-2xl text-red-600 flex">
                  <BsExclamationTriangle className="self-center mr-2" />
                  Deactivating your account
                </p>
                <p className="my-3 text-lg">
                  {' '}
                  Your account will be removed from this website temporarily.
                  You can sign back in anytime to reactivate your account and
                  restore the content.
                </p>
                <p className="py-2">Password:</p>
                <input
                  type="password"
                  placeholder="current password"
                  className="input input-bordered max-h-10 bg-transparent rounded border-slate-400 border-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                onClick={() => {
                  deactivateAccount()
                }}
                className="btn btn-sm btn-neutral absolute right-16 bottom-10 bg-red-600 rounded-3xl"
              >
                <p className="text-lg normal-case text-white font-normal">
                  Deactivate
                </p>
              </button>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-neutral absolute right-48 bottom-10 bg-white border-red-500 rounded-3xl">
                  <p className="text-lg normal-case text-red-500 font-medium">
                    Cancel
                  </p>
                </button>
              </form>
            </div>
          </dialog>

          <p className="ml-8 mb text-gray-500">
            suspend your account until you sign back in
          </p>
        </section>

        <section>
          <button
            className="bg-transparent"
            onClick={() =>
              (document.getElementById('deleteModal')! as any).showModal()
            }
          >
            <p className="my-4 text-rose-700"> Delete account </p>
          </button>
          <dialog id="deleteModal" className="modal">
            <div className="modal-box bg-white w-11/12 max-w-2xl h-96">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-md btn-circle btn-ghost absolute right-4 top-4 text-slate-400">
                  <p className="text-2xl">✕</p>
                </button>
              </form>
              <div className="p-12">
                <p className="mb-4 text-2xl text-red-600 flex">
                  <BsExclamationCircle className="self-center mr-2" /> Deleting
                  your account
                </p>
                <p className="my-3 text-lg">
                  Your account will be removed from this website permanently,
                  including your profile, posts and content you saved.
                </p>
                <p className="py-2">Password:</p>
                <input
                  type="password"
                  placeholder="current password"
                  className="input input-bordered max-h-10 bg-transparent rounded border-slate-400 border-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                onClick={() => {
                  deleteAccount()
                }}
                className="btn btn-sm btn-neutral absolute right-16 bottom-10 w-24 bg-red-600 rounded-3xl"
              >
                <p className="text-lg normal-case text-white font-normal">
                  Delete
                </p>
              </button>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-neutral absolute right-44 bottom-10 bg-white border-red-500 rounded-3xl">
                  <p className="text-lg normal-case text-red-500 font-medium">
                    Cancel
                  </p>
                </button>
              </form>
            </div>
          </dialog>
        </section>
      </section>
    </div>
  )
}
