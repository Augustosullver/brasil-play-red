import { Medal, Star, Crown, Gem, Award, Trophy } from "lucide-react";

export default function Loja() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold mb-8">🏪 Nossa Loja</h1>

      <div className="w-full max-w-md flex flex-col gap-4">
        {/* VIP Bronze */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Medal className="w-8 h-8 text-yellow-600" />
          <span className="text-lg font-semibold">VIP Bronze</span>
        </div>

        {/* VIP Prata */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Star className="w-8 h-8 text-gray-500" />
          <span className="text-lg font-semibold">VIP Prata</span>
        </div>

        {/* VIP Ouro */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Crown className="w-8 h-8 text-yellow-500" />
          <span className="text-lg font-semibold">VIP Ouro</span>
        </div>

        {/* Sócio */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Gem className="w-8 h-8 text-purple-600" />
          <span className="text-lg font-semibold">Sócio</span>
        </div>

        {/* Patrocinador */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Award className="w-8 h-8 text-blue-600" />
          <span className="text-lg font-semibold">Patrocinador</span>
        </div>

        {/* Premium */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-xl shadow-md">
          <Trophy className="w-8 h-8 text-red-600" />
          <span className="text-lg font-semibold">Premium</span>
        </div>
      </div>
    </main>
  );
}
