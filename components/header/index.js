export default function Header() {
  return (
    <header className="pt-10 mb-16">
      <div className="flex justify-center">
        <img src="/upstash.svg" alt="Upstash" width={140} />
      </div>

      <div className="mt-6 text-center text-gray-600">
        <p>Help us by voting our roadmap.</p>
        <p>Vote up the features you want to see in the next release.</p>
      </div>
    </header>
  )
}
