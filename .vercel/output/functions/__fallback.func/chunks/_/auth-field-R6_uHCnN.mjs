import { B as Button, I as Input, c as cn } from './input-BYXOaM1y.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { FormProvider, Controller, useFormContext, useFormState } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "card",
    className: cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
    ...props
  });
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "card-header",
    className: cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
    ...props
  });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "card-title",
    className: cn("leading-none font-semibold", className),
    ...props
  });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "card-description",
    className: cn("text-muted-foreground text-sm", className),
    ...props
  });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "card-content",
    className: cn("px-6", className),
    ...props
  });
}
function AuthCard({ title, description, children }) {
  return /* @__PURE__ */ jsx("div", {
    className: "h-screen w-screen flex items-center justify-center bg-background p-6",
    children: /* @__PURE__ */ jsxs(Card, {
      className: "w-full max-w-md",
      children: [/* @__PURE__ */ jsxs(CardHeader, {
        className: "text-center",
        children: [/* @__PURE__ */ jsx(CardTitle, {
          className: "text-lg md:text-2xl",
          children: title
        }), /* @__PURE__ */ jsx(CardDescription, {
          className: "text-sm md:text-base",
          children: description
        })]
      }), /* @__PURE__ */ jsx(CardContent, { children })]
    })
  });
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(LabelPrimitive.Root, {
    "data-slot": "label",
    className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
    ...props
  });
}
var Form = FormProvider;
var FormFieldContext = React.createContext({});
var FormField = ({ ...props }) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, {
    value: { name: props.name },
    children: /* @__PURE__ */ jsx(Controller, { ...props })
  });
};
var useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React.createContext({});
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, {
    value: { id },
    children: /* @__PURE__ */ jsx("div", {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    })
  });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(Label, {
    "data-slot": "form-label",
    "data-error": !!error,
    className: cn("data-[error=true]:text-destructive", className),
    htmlFor: formItemId,
    ...props
  });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(Slot, {
    "data-slot": "form-control",
    id: formItemId,
    "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
    "aria-invalid": !!error,
    ...props
  });
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) return null;
  return /* @__PURE__ */ jsx("p", {
    "data-slot": "form-message",
    id: formMessageId,
    className: cn("text-destructive text-sm", className),
    ...props,
    children: body
  });
}
function AuthForm({ onSubmit, children, submitText, loadingText, isLoading = false, className = "space-y-4", form }) {
  const handleSubmit = (data) => {
    onSubmit(data, form);
  };
  return /* @__PURE__ */ jsx(Form, {
    ...form,
    children: /* @__PURE__ */ jsxs("form", {
      onSubmit: form.handleSubmit(handleSubmit),
      className,
      children: [
        children(form),
        form.formState.errors.root && /* @__PURE__ */ jsx("div", {
          className: "text-sm font-medium text-destructive",
          children: form.formState.errors.root.message
        }),
        /* @__PURE__ */ jsx(Button, {
          type: "submit",
          size: "sm",
          className: "w-full",
          disabled: isLoading,
          children: isLoading ? /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [/* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }), loadingText]
          }) : submitText
        })
      ]
    })
  });
}
function AuthField({ control, name, label, placeholder, type = "text" }) {
  return /* @__PURE__ */ jsx(FormField, {
    control,
    name,
    render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
      /* @__PURE__ */ jsx(FormLabel, {
        className: "text-sm md:text-base",
        children: label
      }),
      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, {
        className: "text-sm md:text-base h-8 md:h-9",
        type,
        placeholder,
        ...field
      }) }),
      /* @__PURE__ */ jsx(FormMessage, { className: "text-xs md:text-sm" })
    ] })
  });
}

export { AuthCard as A, AuthForm as a, AuthField as b };
//# sourceMappingURL=auth-field-R6_uHCnN.mjs.map
