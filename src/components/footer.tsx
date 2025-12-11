export function Footer() {
  return (
    <footer className="py-8 bg-[#0f0d0c] border-t border-[#3a3230] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#8b1a1a] flex items-center justify-center">
              <span className="text-white font-bold text-sm">少</span>
            </div>
            <span className="font-serif font-bold text-[#faf8f5]">Shaolin Kung-Fu Auténtico Estepona</span>
          </div>

          <p className="text-sm text-[#a09080] text-center">
            © {new Date().getFullYear()} Shaolin Kung-Fu Auténtico Estepona. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
