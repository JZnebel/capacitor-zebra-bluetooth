import { WebPlugin } from '@capacitor/core';
import type { CapacitorZebraBluetoothPlugin, ZebraPrinter, PrinterStatus } from './definitions';
export declare class CapacitorZebraBluetoothWeb extends WebPlugin implements CapacitorZebraBluetoothPlugin {
    discoverPrinters(): Promise<{
        printers: ZebraPrinter[];
    }>;
    connectToPrinter(_options: {
        friendlyName: string;
    }): Promise<{
        success: boolean;
        message?: string;
    }>;
    disconnect(): Promise<{
        success: boolean;
    }>;
    isConnected(): Promise<{
        connected: boolean;
    }>;
    getConnectedPrinter(): Promise<{
        printer: ZebraPrinter | null;
    }>;
    sendZPL(_options: {
        zpl: string;
    }): Promise<{
        success: boolean;
        message?: string;
    }>;
    getPrinterStatus(): Promise<{
        status: PrinterStatus;
    }>;
}
//# sourceMappingURL=web.d.ts.map