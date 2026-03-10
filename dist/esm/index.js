import { registerPlugin } from '@capacitor/core';
const CapacitorZebraBluetooth = registerPlugin('CapacitorZebraBluetooth', {
    web: () => import('./web').then(m => new m.CapacitorZebraBluetoothWeb()),
});
export * from './definitions';
export { CapacitorZebraBluetooth };
