export const CASES = [
    {
        id: "CS-2024-001",
        title: "Apartment 4B Homicide",
        date: "2024-02-15",
        status: "Active",
        location: "Downtown Metro",
        investigator: "Det. Miller",
        evidenceCount: 14,
        thumbnail: "bg-red-900/20"
    },
    {
        id: "CS-2024-002",
        title: "Warehouse Arson",
        date: "2024-02-10",
        status: "Closed",
        location: "Industrial District",
        investigator: "Det. Chen",
        evidenceCount: 8,
        thumbnail: "bg-orange-900/20"
    },
    {
        id: "CS-2024-003",
        title: "Highway 101 Collision",
        date: "2024-02-18",
        status: "Review",
        location: "North Highway",
        investigator: "Det. Smith",
        evidenceCount: 22,
        thumbnail: "bg-blue-900/20"
    }
];

export const EVIDENCE_TYPES = {
    BLOOD: { label: "Biological Trace", color: "#ff003c" },
    WEAPON: { label: "Weapon", color: "#ffd700" },
    FIBER: { label: "Fiber/Micro", color: "#00f0ff" },
    IMPACT: { label: "Impact/Damage", color: "#7000ff" }
};

export const MOCK_EVIDENCE_LIST = [
    { id: 1, type: "BLOOD", x: -2, y: 0.1, z: 1, confidence: 0.98, label: "Blood Spatter A" },
    { id: 2, type: "WEAPON", x: 1, y: 0.5, z: -1, confidence: 0.95, label: "Shell Casing 9mm" },
    { id: 3, type: "FIBER", x: 0, y: 0.1, z: 2, confidence: 0.88, label: "Blue Fabric Thread" },
    { id: 4, type: "IMPACT", x: -3, y: 1.5, z: -3, confidence: 0.92, label: "Bullet Hole" },
];

export const USERS = {
    INVESTIGATOR: { name: "Det. R. Deckard", role: "Investigator" },
    STUDENT: { name: "Cadet K. Jo", role: "Student" },
    LEGAL: { name: "Att. H. Specter", role: "Legal" }
};
