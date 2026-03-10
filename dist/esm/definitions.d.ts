export interface CapacitorZebraBluetoothPlugin {
    /**
     * Discover available Zebra printers via Classic Bluetooth
     * Note: On iOS, only previously paired printers will be returned
     */
    discoverPrinters(): Promise<{
        printers: ZebraPrinter[];
    }>;
    /**
     * Connect to a Zebra printer by friendly name
     * @param options - Connection options with printer friendly name
     */
    connectToPrinter(options: {
        friendlyName: string;
    }): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Disconnect from the currently connected printer
     */
    disconnect(): Promise<{
        success: boolean;
    }>;
    /**
     * Check if a printer is currently connected
     */
    isConnected(): Promise<{
        connected: boolean;
    }>;
    /**
     * Get the currently connected printer
     */
    getConnectedPrinter(): Promise<{
        printer: ZebraPrinter | null;
    }>;
    /**
     * Send ZPL commands to the connected printer
     * @param options - ZPL string to send
     */
    sendZPL(options: {
        zpl: string;
    }): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Get printer status
     */
    getPrinterStatus(): Promise<{
        status: PrinterStatus;
    }>;
}
export interface ZebraPrinter {
    /**
     * Friendly name of the printer (e.g., "ZEB1")
     */
    friendlyName: string;
    /**
     * Manufacturer (usually "Zebra Technologies")
     */
    manufacturer?: string;
    /**
     * Model name if available (e.g., "ZQ320")
     */
    modelName?: string;
    /**
     * Serial number if available
     */
    serialNumber?: string;
    /**
     * Whether this printer is currently connected
     */
    connected: boolean;
}
export interface PrinterStatus {
    /**
     * Whether the printer is connected
     */
    connected: boolean;
    /**
     * Whether the printer is ready to print
     */
    ready: boolean;
    /**
     * Whether the printer is currently printing
     */
    printing: boolean;
    /**
     * Whether the printer has a paper out condition
     */
    paperOut: boolean;
    /**
     * Whether the printer head is open
     */
    headOpen: boolean;
    /**
     * Raw status message from printer
     */
    message?: string;
}
//# sourceMappingURL=definitions.d.ts.map