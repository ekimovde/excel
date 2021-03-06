import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "@/components/table/table.template";

export class Tables extends ExcelComponent {
  static className = "excel__table";

  toHTML() {
    return createTable();
  }
}
