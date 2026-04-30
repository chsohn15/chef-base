export default function HomeView({ shows, onSelectShow }) {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-[10px] font-black uppercase text-blue-500 tracking-[0.2em] mb-2">Discovery Portal</h2>
        <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Culinary Icons</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show) => (
          <div
            key={show.id}
            onClick={() => onSelectShow(show.id)}
            className="bg-neutral-900 border border-neutral-800 rounded-[40px] overflow-hidden cursor-pointer group hover:border-blue-500 transition-all relative aspect-[4/3]"
          >
            <img
              src={show.banner}
              alt=""
              decoding="async"
              className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-neutral-950">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{show.platform}</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter">{show.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
