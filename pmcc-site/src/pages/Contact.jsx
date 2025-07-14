import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name')} className="w-full border p-2" placeholder="Name" />
        <input {...register('email')} type="email" className="w-full border p-2" placeholder="Email" />
        <input {...register('phone')} className="w-full border p-2" placeholder="Phone" />
        <textarea {...register('message')} className="w-full border p-2" placeholder="Message" />
        <button type="submit" className="bg-pmccBlack text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
