import React from "react";
import {
  EmploymentTableInfo,
  EmploymentTableDetailsDate,
  EmploymentTableBorder,
  EmploymentTableDateLine
} from "../../styles/ProfilePageStyle";
const EmploymentTable = () => (
  <>
    <EmploymentTableInfo>
      <table class="table-list">
        <thead>
          <tr>
            <th>Time</th>
            <th>Department</th>
            <th>Job</th>
            <th>Team</th>
          </tr>
        </thead>

        <tr>
          <EmploymentTableDetailsDate>
            <td>14.05.2011</td>
          </EmploymentTableDetailsDate>
          <EmploymentTableDetailsDate>
          <EmploymentTableDateLine/>
          </EmploymentTableDetailsDate>
          <EmploymentTableDetailsDate>
            <td>15.12.2012</td>
          </EmploymentTableDetailsDate>
          <td>HR</td>
          <td>Manager</td>
          <td>12C</td>
        </tr>

        <tr>
          <EmploymentTableDetailsDate>
            <td>14.05.2011</td>
          </EmploymentTableDetailsDate>
          <EmploymentTableDateLine/>
          <EmploymentTableDetailsDate>
            <td>15.12.2012</td>
          </EmploymentTableDetailsDate>
          <td>Audit</td>
          <td>Asystent</td>
          <td>-</td>
        </tr>

        <tr>
          <EmploymentTableDetailsDate>
            <td>14.05.2011</td>
          </EmploymentTableDetailsDate>
          <EmploymentTableDateLine/>
          <EmploymentTableDetailsDate>
            <td>15.12.2012</td>
          </EmploymentTableDetailsDate>
          <td>IT</td>
          <td>Java Developer</td>
          <td>10A</td>
        </tr>
      </table>
    </EmploymentTableInfo>
  </>
);
export default EmploymentTable;
