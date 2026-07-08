/**
 * Éphémérides calculées avec Skyfield (DE421, heure de Paris) — 07/07/2026.
 * Partagées par les articles saisonniers FR/EN/ES pour éviter toute
 * divergence de données entre langues.
 */

/** Index de signe (0 = Bélier … 11 = Poissons), noms traduits côté article. */
export type Lunation = {
  type: "NL" | "PL";
  date: string; // YYYY-MM-DD (heure de Paris)
  time: string; // HH:MM (heure de Paris)
  signIndex: number;
  degree: number;
  eclipse?: "solar-total" | "solar-annular" | "lunar-partial" | "lunar-penumbral";
};

export const LUNATIONS_2026_2027: Lunation[] = [
  { type: "NL", date: "2026-07-14", time: "11:43", signIndex: 3, degree: 22.0 },
  { type: "PL", date: "2026-07-29", time: "16:35", signIndex: 10, degree: 6.5 },
  { type: "NL", date: "2026-08-12", time: "19:36", signIndex: 4, degree: 20.0, eclipse: "solar-total" },
  { type: "PL", date: "2026-08-28", time: "06:18", signIndex: 11, degree: 4.9, eclipse: "lunar-partial" },
  { type: "NL", date: "2026-09-11", time: "05:26", signIndex: 5, degree: 18.4 },
  { type: "PL", date: "2026-09-26", time: "18:49", signIndex: 0, degree: 3.6 },
  { type: "NL", date: "2026-10-10", time: "17:50", signIndex: 6, degree: 17.4 },
  { type: "PL", date: "2026-10-26", time: "05:11", signIndex: 1, degree: 2.8 },
  { type: "NL", date: "2026-11-09", time: "08:02", signIndex: 7, degree: 16.9 },
  { type: "PL", date: "2026-11-24", time: "15:53", signIndex: 2, degree: 2.3 },
  { type: "NL", date: "2026-12-09", time: "01:51", signIndex: 8, degree: 16.9 },
  { type: "PL", date: "2026-12-24", time: "02:28", signIndex: 3, degree: 2.2 },
  { type: "NL", date: "2027-01-07", time: "21:24", signIndex: 9, degree: 17.3 },
  { type: "PL", date: "2027-01-22", time: "13:17", signIndex: 4, degree: 2.2 },
  { type: "NL", date: "2027-02-06", time: "16:56", signIndex: 10, degree: 17.6, eclipse: "solar-annular" },
  { type: "PL", date: "2027-02-21", time: "00:23", signIndex: 5, degree: 2.1, eclipse: "lunar-penumbral" },
  { type: "NL", date: "2027-03-08", time: "10:29", signIndex: 11, degree: 17.6 },
  { type: "PL", date: "2027-03-22", time: "11:43", signIndex: 6, degree: 1.6 },
  { type: "NL", date: "2027-04-07", time: "01:51", signIndex: 0, degree: 17.0 },
  { type: "PL", date: "2027-04-21", time: "00:27", signIndex: 7, degree: 0.6 },
  { type: "NL", date: "2027-05-06", time: "12:58", signIndex: 1, degree: 15.7 },
  { type: "PL", date: "2027-05-20", time: "12:59", signIndex: 7, degree: 29.2 },
  { type: "NL", date: "2027-06-04", time: "21:40", signIndex: 2, degree: 14.0 },
  { type: "PL", date: "2027-06-19", time: "02:44", signIndex: 8, degree: 27.6 },
  { type: "NL", date: "2027-07-04", time: "05:02", signIndex: 3, degree: 12.0 },
  { type: "PL", date: "2027-07-18", time: "17:44", signIndex: 9, degree: 25.8, eclipse: "lunar-penumbral" },
  { type: "NL", date: "2027-08-02", time: "12:05", signIndex: 4, degree: 9.9, eclipse: "solar-total" },
  { type: "PL", date: "2027-08-17", time: "09:28", signIndex: 10, degree: 24.2, eclipse: "lunar-penumbral" },
  { type: "NL", date: "2027-08-31", time: "19:41", signIndex: 5, degree: 8.1 },
  { type: "PL", date: "2027-09-16", time: "01:03", signIndex: 11, degree: 22.9 },
  { type: "NL", date: "2027-09-30", time: "04:36", signIndex: 6, degree: 6.7 },
  { type: "PL", date: "2027-10-15", time: "15:47", signIndex: 0, degree: 22.0 },
  { type: "NL", date: "2027-10-29", time: "15:36", signIndex: 7, degree: 5.9 },
  { type: "PL", date: "2027-11-14", time: "04:25", signIndex: 1, degree: 21.5 },
  { type: "NL", date: "2027-11-28", time: "04:24", signIndex: 8, degree: 5.7 },
  { type: "PL", date: "2027-12-13", time: "17:08", signIndex: 2, degree: 21.4 },
  { type: "NL", date: "2027-12-27", time: "21:12", signIndex: 9, degree: 5.8 },
];

/** Rétrogradations de Mercure (stations, heure de Paris). */
export type MercuryRx = {
  /** Date de la station rétrograde. */
  start: string;
  startTime: string;
  startSignIndex: number;
  startDegree: number;
  /** Date de la station directe. */
  end: string;
  endTime: string;
  endSignIndex: number;
  endDegree: number;
};

export const MERCURY_RX: MercuryRx[] = [
  // Période en cours de saison 2026 (contexte)
  { start: "2026-10-24", startTime: "09:12", startSignIndex: 7, startDegree: 21.0, end: "2026-11-13", endTime: "16:53", endSignIndex: 7, endDegree: 5.0 },
  // 2027
  { start: "2027-02-09", startTime: "18:36", startSignIndex: 11, startDegree: 6.0, end: "2027-03-03", endTime: "13:32", endSignIndex: 10, endDegree: 20.9 },
  { start: "2027-06-10", startTime: "20:15", startSignIndex: 3, startDegree: 6.4, end: "2027-07-04", endTime: "21:39", endSignIndex: 2, endDegree: 27.5 },
  { start: "2027-10-07", startTime: "16:37", startSignIndex: 7, startDegree: 4.9, end: "2027-10-28", endTime: "16:10", endSignIndex: 6, endDegree: 19.3 },
];

/** Prochaine station rétrograde après la période couverte (mentionnée en prose). */
export const NEXT_RX_2028 = { start: "2028-01-24", signIndex: 10, degree: 19.7 };
