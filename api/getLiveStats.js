export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('🔴 [getLiveStats] Falta la variable de entorno BREVO_API_KEY');
    return res.status(500).json({ message: 'Error de configuración del servidor: Falta BREVO_API_KEY' });
  }

  const territoryMapping = {
    'Amazonas': 'Amazonas',
    'Amazonía': 'Amazonas',
    'Amazon': 'Amazonas',
    'Amazonie': 'Amazonas',
    'Amazonas': 'Amazonas',
    'Macizo': 'Macizo',
    'Macizo / San Agustín': 'Macizo',
    'Colombian Massif / San Agustín': 'Macizo',
    'Kolumbianisches Massiv / San Agustín': 'Macizo',
    'Massif Colombien / San Agustín': 'Macizo',
    'Guainia': 'Guainía',
    'Guainía': 'Guainía',
    'SierraNevada': 'Sierra Nevada',
    'Sierra Nevada': 'Sierra Nevada',
    'Pacífico': 'Pacífico',
    'Pacifico': 'Pacífico',
    'Pacific': 'Pacífico',
    'Pazifik': 'Pacífico',
    'Pacifique': 'Pacífico',
    'Putumayo': 'Putumayo',
    'Putumayo / Caquetá': 'Putumayo',
    'SabanaDeBogota': 'Eje Cafetero',
    'Bogota': 'Eje Cafetero',
    'Bogotá / Sabana': 'Eje Cafetero',
    'Bogotá / Savana': 'Eje Cafetero',
    'Bogotá / Savanne': 'Eje Cafetero',
    'Bogotá / Savane': 'Eje Cafetero',
    'Sabana': 'Eje Cafetero',
    'Antioquia': 'Eje Cafetero',
    'Antioquia / Zona Cafetera': 'Eje Cafetero',
    'Antioquia / Coffee Zone': 'Eje Cafetero',
    'Antioquia / Kaffeeregion': 'Eje Cafetero',
    'Antioquia / Zone Caféière': 'Eje Cafetero',
    'Medellin': 'Eje Cafetero',
    'Medellín': 'Eje Cafetero'
  };

  const targetTerritories = ['Sierra Nevada', 'Guainía', 'Putumayo', 'Macizo', 'Pacífico', 'Amazonas', 'Eje Cafetero'];

  try {
    let allContacts = [];
    let offset = 0;
    const limit = 500;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`https://api.brevo.com/v3/contacts?limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'api-key': apiKey
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`🔴 [getLiveStats] Error fetching contacts (Status ${response.status}):`, errorText);
        return res.status(response.status).json({ message: 'Error fetching contacts from Brevo', error: errorText });
      }

      const data = await response.json();
      const contacts = data.contacts || [];
      allContacts = allContacts.concat(contacts);
      
      hasMore = contacts.length === limit;
      offset += limit;
    }

    console.log(`🟢 [getLiveStats] Total contactos obtenidos: ${allContacts.length}`);

    const territoryCounts = {};
    targetTerritories.forEach(t => territoryCounts[t] = 0);

    allContacts.forEach(contact => {
      const attributes = contact.attributes || {};
      const destinos = attributes.DESTINOS || attributes.destinos || '';
      
      if (destinos) {
        const destinoList = destinos.split(',').map(d => d.trim());
        destinoList.forEach(d => {
          const normalized = territoryMapping[d];
          if (normalized && territoryCounts.hasOwnProperty(normalized)) {
            territoryCounts[normalized]++;
          }
        });
      }
    });

    const result = {
      totals: territoryCounts,
      totalContacts: allContacts.length,
      timestamp: new Date().toISOString()
    };

    console.log('🟢 [getLiveStats] Estadísticas calculadas:', result.totals);

    return res.status(200).json(result);

  } catch (error) {
    console.error('🔴 [getLiveStats] Error grave:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error.toString() });
  }
}