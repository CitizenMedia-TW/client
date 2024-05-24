// TODO: implement backend services and darkmode
import React from 'react'
import { CircleAlert, TriangleAlert } from 'lucide-react'

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
    <div className=" px-4 sm:px-12">
      <section className="flex flex-col">
        <section className="">
          {<p className="text-2xl font-bold">E-Mail</p>}
          <section className="flex flex-col sm:flex-row place-content-between pl-12 pt-12">
            <section className="w-80">
              {<p className="font-normal text-xl sm:pb-0 pb-5">{email}</p>}
            </section>
            <button
              className="bg-transparent border-2 border-slate-400 h-6 w-28 rounded btn-info"
              onClick={() => changeEmail()}
            >
              <p className="text-slate-500 text-sm">Change email</p>
            </button>
          </section>
        </section>

        <section className="pt-12">
          {<p className="text-2xl font-bold">Password</p>}
          <div className="flex flex-col sm:flex-col pl-12 pt-12 gap-y-7">
            <div className="flex flex-col sm:flex-row">
              <section className="flex flex-col sm:flex-row">
                <section className="w-64">
                  <p className="font-normal text-xl sm:pb-0 pb-5">
                    Current password
                  </p>
                </section>
                <input
                  type="password"
                  placeholder="current password"
                  className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>
              <button
                className="bg-transparent pl-4 sm:pb-0 pb-5"
                onClick={() => forgetPassword()}
              ></button>
              <p className="text-cyan-800 text-xs">Forget password?</p>
            </div>
            <div className="flex flex-col sm:flex-row place-content-between">
              <section className="flex flex-col sm:flex-row">
                <section className="w-64">
                  {
                    <p className="font-normal text-xl sm:pb-0 pb-5">
                      New password
                    </p>
                  }
                </section>
                <input
                  type="password"
                  placeholder="new password"
                  className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </section>
            </div>
            <div className="flex flex-col sm:flex-row place-content-between">
              <section className="flex flex-col sm:flex-row  sm:pb-0 pb-5">
                <section className="w-64">
                  {
                    <p className="font-normal text-xl sm:pb-0 pb-5">
                      Confirm new password
                    </p>
                  }
                </section>
                <input
                  type="password"
                  placeholder="confirm new password"
                  className="input input-bordered max-h-6 bg-transparent rounded border-slate-400 border-2"
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </section>
              <button
                className="bg-slate-400 h-6 w-20 rounded btn-accent"
                onClick={() => resetPassword()}
              >
                <p className="text-white text-sm">Confirm</p>
              </button>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-col">
        <hr className="h-1 bg-slate-600 mt-12 mb-7" />
      </section>

      <section className="flex flex-col">
        <section className="flex-col">
          <button
            className="bg-transparent"
            onClick={() =>
              (document.getElementById('deactivateModal')! as any).showModal()
            }
          >
            <p className="font-normal text-xl text-rose-700">
              Deactivate account
            </p>
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
                <p className="text-2xl text-red-600 flex">
                  <TriangleAlert className="self-center" />
                  Deactivating your account
                </p>
                <p className="text-lg">
                  {' '}
                  Your account will be removed from this website temporarily.
                  You can sign back in anytime to reactivate your account and
                  restore the content.
                </p>
                <p className="">Password:</p>
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

          <p className="font-normal text-sm text-gray-500 pl-12 pt-4">
            suspend your account until you sign back in
          </p>
        </section>

        <section className="">
          <button
            className=""
            onClick={() =>
              (document.getElementById('deleteModal')! as any).showModal()
            }
          >
            <p className="font-normal text-xl text-rose-700 pt-7">
              {' '}
              Delete account{' '}
            </p>
          </button>
          <dialog id="deleteModal" className="modal">
            <div className="modal-box bg-white w-11/12 max-w-2xl h-96">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-md btn-circle btn-ghost absolute right-4 top-4 text-slate-400">
                  <p className="text-2xl">✕</p>
                </button>
              </form>
              <div className="">
                <p className="text-2xl text-red-600 flex">
                  <CircleAlert className="self-center" /> Deleting your account
                </p>
                <p className="text-lg">
                  Your account will be removed from this website permanently,
                  including your profile, posts and content you saved.
                </p>
                <p className="">Password:</p>
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
