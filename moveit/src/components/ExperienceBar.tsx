export function ExperienceBar() {
    return (
        //No TypeScript a nomeclatura de class é diferente, usamos className ao inves de class
        <header className="experience-bar">
            <span> 0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left: '50%' }}>
                    300xp
                </span>
            </div>
            <span>600 xp</span>
        </header>

    );
}