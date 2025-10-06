"use client"
import {Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDown01, ArrowUp01, CaseLower, CaseUpper, CopyIcon, ShieldCheck } from 'lucide-react';
import {toast} from 'sonner'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { generatePassword , PasswordConfig} from '@/lib/password';
import {Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import FormSavePassword from './form-save-password';


const options = [
    {
        key: "hasUpperCase",
        label: "Mayusculas (A-Z)",
        icon: <CaseUpper className="w-5 h-5"/>
    },{
        key: 'hasLowerCase',
        label: "Minusculas (a-z)",
        icon: <CaseLower/>
    },{
        key: 'hasNumbers',
        label: "Numeros (0-9)",
        icon: <ArrowUp01 />
    },{
        key: 'hasSymbols',
        label:'Simbolos (!@#$%^&*)',
        icon: <ArrowDown01 />
    }
] as const;

const FormCreatePassword = () => {
    

    const [password, setPassword] = useState('');
    const form = useForm<PasswordConfig>({
        defaultValues: {
            hasLowerCase: true,
            hasUpperCase: true,
            hasNumbers: true,
            hasSymbols: true,
            length: 16,
        }
    });
    useEffect(() => {
         const generated = generatePassword({
            hasLowerCase: true,
            hasUpperCase: true,
            hasNumbers: true,
            hasSymbols: true,
            length: 16,
         });
         setPassword(generated);
    },[]);
    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password).then(() => {
            toast.success("Password copiada en el portapapeles");
        });
    }
    const handleGenerate = () => {
     const values = form.getValues();
     const newPassword = generatePassword(values);
     setPassword(newPassword);
    }

    return (  
    <div className="max-w-2xl mx-auto p-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">
            Generador de Contraseñas
        </h1>
        <p className="text-gray-600">
            Crea contraseñas seguras y personalizadas
        </p>
      </header>
      <Card className="bg-gradient-to-r from-gray-900 to-gray-800">
          <CardContent className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
               <p className="text-sm text-slate-400 mb-1">
                Tu contraseña generada:
                </p>  
                <p className="text-xl font-mono break-all text-green-400 leading-relaxed">
                    {password || 'Genera una contraseña segura'}  
                </p>
            </div>
            <Button 
              onClick={handleCopyPassword}
             className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white
              px-4 py-2 rounded-lg transition duraation-200 hover:scale-105 cursor-pointer">
                 <CopyIcon className="w-5 h-5"/>
            </Button>
          </CardContent>
        </Card>  
        <Card>
            <CardContent>
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                
                </h2>
                <Form {...form}>
                    <form 
                    className="space-y-6"
                    onSubmit={form.handleSubmit(handleGenerate)} >
                  <FormField 
                  control = {form.control}
                  name="length"
                  render={({field}) =>(
                    <FormItem>
                        <FormLabel 
                        className="text-sm font-medium text-gray-700">
                            Longitud de la contraseña
                        </FormLabel>
                        <FormControl>

                            <Input 
                            {...field}
                            type="number"
                            className="text-center text-lg font-semibold h-12"
                            min={4}
                            max={128}
                            />
                        </FormControl>
                    </FormItem>
                   )}
                  />
                   <div className="grid grid-cols-2 gap-4">
                     <h3 className="text-sm font-medium text-gray-700">
                        ¿Incluir caracteres?
                     </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {
                        options.map(({key, label, icon}) => (

                            <FormField key={key} 
                             control = {form.control}
                             name={key}
                             render={({field}) =>(
                                 <FormItem>
                                     <FormLabel>
                                         <FormControl>
                                             <Checkbox 
                                              checked={field.value}
                                              onCheckedChange={field.onChange}
                                              />
                                         </FormControl>
                                         <span className="text-xl">
                                            {icon}
                                         </span>
                                         <div>
                                             <p>{label}</p>
     
                                         </div>
                                     </FormLabel>
                                 </FormItem>
                             )}
                            />
                        ))
                       }
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-4">
                        <Button 
                         type="submit"
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                            <ShieldCheck/>
                            Generar nueva contraseña

                        </Button>
                        <FormSavePassword />

                      </div>
                    </div>
                  </form>
                </Form>
                </CardContent>
        </Card>
 
    </div> );
}
 
export default FormCreatePassword;

