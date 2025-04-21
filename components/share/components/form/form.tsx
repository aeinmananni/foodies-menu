"use client";
import Button from "@/UI/button";
import ControllerInput from "@/UI/controller/inputController";
import ControllerTextarea from "@/UI/controller/textareaController";
import { ShareFormType } from "@/models";
import { useForm } from "react-hook-form";

const inptuStyle =
  "p-2 rounded-md bg-transparent border border-yellow-800 outline-none focus:ring-2 ring-offset-2 ring-orange-600";

export default function Form() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ShareFormType>();

  const onSubmit = (data: ShareFormType) => {
    alert(JSON.stringify(data, null, 2));
    reset({
      email: "",
      instructions: "",
      name: "",
      shortSummery: "",
      title: "",
    });
  };

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center gap-3 w-full">
        <ControllerInput
          control={control}
          rules={{ required: "Your Name is Required!" }}
          name="name"
          className={inptuStyle}
          label="YOUR NAME"
          errors={errors.name && errors.name.message}
        />
        <ControllerInput
          control={control}
          rules={{ required: "Your Email is Required!" }}
          name="email"
          className={inptuStyle}
          label="YOUR EMAIL"
          errors={errors.email && errors.email.message}
        />
      </div>
      <ControllerInput
        control={control}
        rules={{ required: "Title is Required!" }}
        name="title"
        className={inptuStyle}
        label="TITLE"
        errors={errors.title && errors.title.message}
      />
      <ControllerInput
        control={control}
        rules={{ required: "ShortSummery is Required!" }}
        name="shortSummery"
        className={inptuStyle}
        label="SHORT SUMMARY"
        errors={errors.shortSummery && errors.shortSummery.message}
      />
      <ControllerTextarea
        className={inptuStyle}
        control={control}
        name="instructions"
        label="INSTRUCTIONS"
        rows={6}
      />
      <div className="w-full flex justify-end">
        <Button
          type="submit"
          className="bg-orange-600 text-white p-2 rounded-md"
        >
          Share Meal
        </Button>
      </div>
    </form>
  );
}
