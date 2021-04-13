export default function Timer({ value }) {
  let pad = (x) => {
    return x < 10 ? '0' + x : x
  }
  return (
    <div
      className="
    absolute right-8 top-full text-4xl tabular-nums
    shadow-lg bg-white text-gray-900 rounded-md py-2 px-4
    "
    >
      {pad(value.hours)}:{pad(value.minutes)}:{pad(value.seconds.toFixed(0))}
    </div>
  )
}
