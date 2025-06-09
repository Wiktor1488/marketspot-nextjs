export default function UserProfile({ user }) {
  return (
    <div className="space-y-8">
      {/* Informacje ogólne */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            JK
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Cześć, {user.name}!
            </h1>
            <p className="text-gray-600">{user.email}</p>
            <div className="text-yellow-500 mt-1">
              {"★".repeat(user.rating)}
              {"☆".repeat(5 - user.rating)}
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm text-gray-600">Jesteś z nami:</p>
            <p className="text-red-600 font-bold">{user.memberSince}</p>
            <p className="text-sm text-gray-600 mt-2">
              Liczba dokonanych transakcji:
            </p>
            <p className="text-red-600 font-bold text-xl">
              {user.completedTransactions}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ustawienia konta */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Ustawienia konta
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">Twoje dane</p>
                  <p className="text-sm text-gray-600">
                    Informacje o Twoim koncie
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zmień
                </button>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">Adresy wysyłki</p>
                  <p className="text-sm text-gray-600">
                    Informacje o Twoich adresach
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zmień
                </button>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">Konta bankowe</p>
                  <p className="text-sm text-gray-600">
                    Informacje o Twoich płatnościach
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zmień
                </button>
              </div>
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800">Usługi</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">MarketPlus!</p>
                  <p className="text-sm text-gray-600">
                    Darmowa dostawa i zwroty
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zobacz
                </button>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">
                    Aplikacja MarketSpot
                  </p>
                  <p className="text-sm text-gray-600">
                    Na tableta, telefon, itd
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zobacz
                </button>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-800">MarketFamily</p>
                  <p className="text-sm text-gray-600">
                    Płatności bliżej w zakupach
                  </p>
                </div>
                <button className="text-blue-600 hover:underline text-sm">
                  Zobacz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ostrzeżenie bezpieczeństwa */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
          <div className="text-yellow-600 text-xl">⚠️</div>
          <p className="text-gray-700">
            Chcesz mieć bezpieczniejsze konto?
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Skorzystaj z weryfikacji dwuetapowej
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
