import { WebPlugin } from '@capacitor/core';
export class CapacitorZebraBluetoothWeb extends WebPlugin {
    async discoverPrinters() {
        console.warn('CapacitorZebraBluetooth: Bluetooth printing is not available on web platform');
        return { printers: [] };
    }
    async connectToPrinter(_options) {
        console.warn('CapacitorZebraBluetooth: Bluetooth printing is not available on web platform');
        return { success: false, message: 'Not supported on web platform' };
    }
    async disconnect() {
        console.warn('CapacitorZebraBluetooth: Bluetooth printing is not available on web platform');
        return { success: false };
    }
    async isConnected() {
        return { connected: false };
    }
    async getConnectedPrinter() {
        return { printer: null };
    }
    async sendZPL(_options) {
        console.warn('CapacitorZebraBluetooth: Bluetooth printing is not available on web platform');
        console.log('ZPL Command (Web Preview):\n', _options.zpl);
        return { success: false, message: 'Not supported on web platform' };
    }
    async getPrinterStatus() {
        return {
            status: {
                connected: false,
                ready: false,
                printing: false,
                paperOut: false,
                headOpen: false,
                message: 'Web platform not supported'
            }
        };
    }
}
