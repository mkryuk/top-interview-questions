export function countMentions(numberOfUsers: number, events: string[][]): number[] {
  const parsed = parseEvents(events);
  sortEvents(parsed);

  const result: number[] = new Array(numberOfUsers).fill(0);
  const online: boolean[] = new Array(numberOfUsers).fill(true);
  const offlineUntil: number[] = new Array(numberOfUsers).fill(0);

  let i = 0;
  while (i < parsed.length) {
    const time = parsed[i].time;

    // auto online happens before any events at this timestamp
    applyAutoOnline(time, online, offlineUntil);

    // process all events at this timestamp (offline already sorted before message)
    while (i < parsed.length && parsed[i].time === time) {
      const ev = parsed[i];

      if (ev.type === "OFFLINE") {
        processOffline(time, ev.payload, online, offlineUntil);
      } else {
        processMessage(ev.payload, online, result);
      }

      i++;
    }
  }

  return result;
}

type EventType = "MESSAGE" | "OFFLINE";

interface EventItem {
  type: EventType;
  time: number;
  payload: string;
}

function parseEvents(raw: string[][]): EventItem[] {
  const parsed: EventItem[] = [];

  for (let i = 0; i < raw.length; i++) {
    const type = raw[i][0] as EventType;
    const time = parseInt(raw[i][1], 10);
    const payload = raw[i][2];

    parsed.push({ type, time, payload });
  }

  return parsed;
}

function sortEvents(arr: EventItem[]): void {
  const order: Record<EventType, number> = {
    OFFLINE: 0,
    MESSAGE: 1,
  };

  arr.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    }
    return order[a.type] - order[b.type];
  });
}

function applyAutoOnline(time: number, online: boolean[], offlineUntil: number[]): void {
  for (let u = 0; u < online.length; u++) {
    if (!online[u]) {
      if (offlineUntil[u] <= time) {
        online[u] = true;
      }
    }
  }
}

function processOffline(time: number, payload: string, online: boolean[], offlineUntil: number[]): void {
  const id = parseInt(payload, 10);

  online[id] = false;
  offlineUntil[id] = time + 60;
}

function processMessage(payload: string, online: boolean[], mentions: number[]): void {
  // tokens may contain ids, all, here; each token counts as one mention action
  const trimmed = payload.trim();
  const tokens = trimmed.length === 0 ? [] : trimmed.split(/\s+/);

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];

    if (t === "ALL") {
      for (let u = 0; u < mentions.length; u++) {
        mentions[u]++;
      }
    } else if (t === "HERE") {
      for (let u = 0; u < mentions.length; u++) {
        if (online[u]) {
          mentions[u]++;
        }
      }
    } else if (t.startsWith("id")) {
      const id = parseInt(t.slice(2), 10);
      if (id >= 0 && id < mentions.length) {
        mentions[id]++;
      }
    }
  }
}
