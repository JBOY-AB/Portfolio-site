import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { X } from "lucide-react"

export const ToastProvider = ToastPrimitives.Provider
export const ToastViewport = ToastPrimitives.Viewport

export const Toast = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={`bg-gray-900 text-white p-4 rounded-md shadow-lg flex justify-between items-start gap-4 ${className}`}
    {...props}
  />
))
Toast.displayName = "Toast"

export const ToastTitle = ToastPrimitives.Title
export const ToastDescription = ToastPrimitives.Description

export const ToastClose = React.forwardRef((props, ref) => (
  <ToastPrimitives.Close ref={ref} asChild>
    <button className="text-gray-400 hover:text-white">
      <X size={16} />
    </button>
  </ToastPrimitives.Close>
))
ToastClose.displayName = "ToastClose"
