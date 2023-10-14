export default function CoolorsCTA({ color }) {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-xl grid lg:grid-cols-2 gap-4 items-center px-8 py-8"
      style={{ background: color.toHex(), color: color.isLight() ? 'black' : 'white' }}
    >
      <div className="lg:self-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="block">Love colors?</span>
          <span className="block">Try Coolors palette generator.</span>
        </h2>
        <p className="mt-4 text-lg leading-6">
          With Coolors you can create, explore, and save stunning color palettes.
        </p>
        <a
          href="https://coolors.co/?ref=629fe563c3b4ba000af28ff7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium shadow"
          style={{ background: color.isLight() ? 'black' : 'white', color: color.isLight() ? 'white' : 'black' }}
        >
          Try it for free
        </a>
      </div>
      <div className="aspect-h-3 aspect-w-5 md:aspect-h-1 md:aspect-w-2">
        <img alt="Coolors homepage" className="rounded-md object-cover" src="/coolors.png" />
      </div>
    </div>
  )
}
