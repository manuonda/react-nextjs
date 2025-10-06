"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SaveIcon } from "lucide-react"
import { useState } from "react"

export function FormSavePassword() {
 
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  }
  return (
    <Dialog
     open={isOpen}
     onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <SaveIcon />
            Guardar Contraseña
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <SaveIcon className="inline mr-2 mb-1"/>
            Guardar Contraseña
          </DialogTitle>
          <DialogDescription>
           Guarda tu contraseña de forma segura con toda su información.
          </DialogDescription>
        </DialogHeader>
         <section className="space-y-6">

         </section>
      </DialogContent>
    </Dialog>
  )
}

export default FormSavePassword;