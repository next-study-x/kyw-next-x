import Room from "./_component/Room";

export default function Page() {
  return (
    <div className="w-[600px] min-h-[100dvh] flex flex-col items-stretch">
      <div className="h-[53px] flex items-center p-4">
        <h2 className="text-white">쪽지</h2>
      </div>
      <Room />
    </div>
  );
}
