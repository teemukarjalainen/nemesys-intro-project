import React, { useState } from 'react';
import styles from '../styles/ListItem.module.css'; // Optional: Add styling for ListItem

interface ListItemProps {
    businessId: string;
    names: Array<{ name: string; type: string; registrationDate: string, endDate: string }>;
    mainBusinessLine: {
        descriptions: Array<{ languageCode: string; description: string }>;
    };
    companyForms: Array<{ descriptions: Array<{ languageCode: string; description: string }> }>;
    registeredEntries: Array<{ descriptions: Array<{ languageCode: string, description: string }> }>;
}

const ListItem: React.FC<ListItemProps> = ({businessId, names, mainBusinessLine, companyForms, registeredEntries }) => {
    const [isOpen, setIsOpen] = useState(false);
    // Use the first company name from array
    const companyName = names?.[0]?.name || "No company name";
    // Use the description for main business line fetching with languageCode "3" which is english as per the API: https://avoindata.prh.fi/fi/krek/swagger-ui
    const businessLineDescription = mainBusinessLine?.descriptions?.find((desc) => desc.languageCode === "3")?.description || "No description available";
    // Get the company type or "form"
    const companyFormDescription = companyForms?.[0]?.descriptions?.find((desc) => desc.languageCode === "3")?.description || "No company form description";
    // Get the registration status (active/ceased)
    const statusDescription = registeredEntries?.[0]?.descriptions?.find((desc) => desc.languageCode === "3")?.description || "Status unknown";

    return (
        <div className={styles.listItem}>
            <div className={styles.mainInfo}>
                <div className={styles.leftContainer}>
                    <div className={styles.companyName}>{companyName}</div>
                    <div className={styles.companyIdTitle}>Business ID: <div className={styles.companyId}>{businessId}</div></div>
                </div>
                <div className={styles.rightContainer}>
                    <button className={styles.chevron} onClick={() => setIsOpen((prev) => !prev)}/>
                </div>
            </div>
            {isOpen && (
                <div>
                    <p><strong>Main Business Line:</strong> {businessLineDescription}</p>
                    <p><strong>Company Form:</strong> {companyFormDescription}</p>
                    <p><strong>Status:</strong> {statusDescription}</p>
                    <p><strong>Registration Date:</strong> {names?.[0]?.registrationDate}</p>
                    <p><strong>End Date:</strong> {names?.[0]?.endDate || "N/A"}</p>
                </div>
            )}
        </div>
    );
};

export default ListItem;
