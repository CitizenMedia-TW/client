// TODO: implement backend services and darkmode
import React from 'react'
import { CircleAlert, TriangleAlert } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
    if (password !== userPasswd || userPasswd === undefined) {
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
    <main className="px-4 lg:px-12 space-y-16">
      <section className="space-y-12">
        <article className="space-y-8">
          <h2 className="text-2xl font-bold">E-Mail</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 items-center gap-y-4 sm:pl-12">
            <span className="font-normal text-xl">{email}</span>
            <Button
              variant="outline"
              className="group w-32 ml-auto bg-transparent hover:bg-slate-400 focus:bg-slate-400 border-2 border-slate-400 rounded"
              onClick={() => changeEmail()}
            >
              <span className="text-slate-500 dark:text-slate-100 text-sm group-hover:text-white group-focus:text-white">
                Change email
              </span>
            </Button>
          </section>
        </article>

        <article className="space-y-4 lg:space-y-12">
          <h2 className="text-2xl font-bold">Password</h2>
          <section className="flex flex-col sm:flex-col sm:pl-12 gap-y-4 lg:gap-y-8">
            <article className="grid grid-cols-12 items-center gap-4">
              <Label
                htmlFor="currentPassword"
                className="col-span-full sm:col-span-5 lg:col-span-4 font-normal text-xl"
              >
                Current password
              </Label>
              <Input
                type="password"
                id="currentPassword"
                placeholder="current password"
                className="col-span-full sm:col-span-7 lg:col-span-5 max-h-8 input input-bordered bg-transparent border-2 border-slate-400 dark:border-white rounded"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="link"
                className="group col-start-9 sm:col-start-10 lg:col-start-10 col-span-4 sm:col-span-3 lg:col-span-2 self-end sm:ml-auto bg-transparent"
                onClick={() => forgetPassword()}
              >
                <span className="text-cyan-800 dark:text-white text-xs underline group-hover:opacity-75 group-focus:opacity-75">
                  Forget password?
                </span>
              </Button>
            </article>

            <article className="grid grid-cols-12 items-center gap-4">
              <Label
                htmlFor="newPassword"
                className="col-span-full sm:col-span-5 lg:col-span-4 font-normal text-xl"
              >
                New password
              </Label>
              <Input
                type="password"
                id="newPassword"
                placeholder="new password"
                className="col-span-full sm:col-span-7 lg:col-span-5 max-h-8 input input-bordered bg-transparent border-2 border-slate-400 dark:border-white rounded"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </article>

            <article className="grid grid-cols-12 items-center gap-4">
              <Label
                htmlFor="confirmNewPassword"
                className="col-span-full sm:col-span-5 lg:col-span-4 font-normal text-xl"
              >
                Confirm new password
              </Label>
              <Input
                type="password"
                id="confirmNewPassword"
                placeholder="confirm new password"
                className="col-span-full sm:col-span-7 lg:col-span-5 max-h-8 input input-bordered bg-transparent border-2 border-slate-400 dark:border-white rounded"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />

              <Button
                className="group col-start-9 sm:col-start-10 lg:col-start-11 col-span-4 sm:col-span-3 lg:col-span-2 bg-slate-400 hover:bg-white focus:bg-white border border-slate-400 rounded disabled:opacity-40"
                onClick={() => resetPassword()}
                disabled={!password || !newPassword || !confirmNewPassword}
              >
                <span className="text-sm text-white group-hover:text-slate-400 group-focus:text-slate-400 ">
                  Confirm
                </span>
              </Button>
            </article>
          </section>
        </article>
      </section>

      <hr className="h-1 bg-slate-600" />

      <section className="space-y-4">
        <section>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                className="text-xl text-red-600 hover:text-white focus:text-white bg-transparent hover:bg-red-500 focus:bg-red-500"
              >
                Deactivating your account
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="space-y-8">
                <DialogTitle className="flex gap-x-2 text-red-600 dark:text-red-400">
                  <TriangleAlert className="self-center" />
                  <span className="text-xl">Deactivating your account</span>
                </DialogTitle>
                <DialogDescription className="text-start">
                  Your account will be removed from this website temporarily.
                  You can sign back in anytime to reactivate your account and
                  restore the content.
                </DialogDescription>
              </DialogHeader>

              <section className="grid gap-4 my-4 items-center">
                <Label htmlFor="passwordForDeactivate">Password:</Label>
                <Input
                  id="passwordForDeactivate"
                  type="password"
                  placeholder="type your password"
                />
              </section>

              <DialogFooter>
                <DialogClose className="mt-4 sm:mt-0" asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="px-6 py-1 border-2 border-red-300 rounded-xl hover:bg-white focus:bg-white hover:opacity-75 focus:opacity-75"
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  className="px-6 py-1 bg-red-300 text-black font-bold rounded-xl hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white"
                  onClick={() => {
                    deactivateAccount()
                  }}
                >
                  Deactivate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <p className="font-normal text-sm text-gray-500 dark:text-gray-200 pl-4 sm:pl-12">
            suspend your account until you sign back in
          </p>
        </section>

        <section>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                className="text-xl text-red-600 hover:text-white focus:text-white bg-transparent hover:bg-red-500 focus:bg-red-500"
              >
                Deleting your account
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader className="space-y-8">
                <DialogTitle className="flex gap-x-2 text-red-600 dark:text-red-400">
                  <CircleAlert className="self-center" />
                  <span className="text-xl">Deleting your account</span>
                </DialogTitle>
                <DialogDescription className="text-start">
                  Your account will be removed from this website permanently,
                  including your profile, posts and content you saved.
                </DialogDescription>
              </DialogHeader>

              <section className="grid gap-4 my-4 items-center">
                <Label htmlFor="passwordForDelete">Password:</Label>
                <Input
                  id="passwordForDelete"
                  type="password"
                  placeholder="type your password"
                />
              </section>

              <DialogFooter>
                <DialogClose className="mt-4 sm:mt-0" asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="px-6 py-1 border-2 border-red-300 rounded-xl hover:bg-white focus:bg-white hover:opacity-75 focus:opacity-75"
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="submit"
                  className="px-6 py-1 bg-red-300 text-black font-bold rounded-xl hover:bg-red-500 focus:bg-red-500 hover:text-white focus:text-white"
                  onClick={() => {
                    deleteAccount()
                  }}
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <p className="font-normal text-sm text-gray-500 dark:text-gray-200 pl-4 sm:pl-12">
            Permanently delete your account and all your content
          </p>
        </section>
      </section>
    </main>
  )
}
