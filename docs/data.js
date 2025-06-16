const TEAMS = {
    title: "JAP vs SUI - 2025 Monal Team Épée Men Final",
    team1: {
        name: "Switzerland", 
        code: "SUI",
    },
    team2: {
        name: "Japan",
        code: "JAP", 
    }
};

const matchData = [
            // Match start (0-0)
            { linkTime: "1:24:29", time: "1:24:33", bout: 1, boutTime: "3:00", team1Player: "Alexis Bayard", team1Score: 0, team2Score: 0, team2Player: "Koki Kano", action: "Match begins.", isMatchStart: true },
            // Initial bout: Bayard (SUI) vs Kano (JAP)
            { linkTime: "1:25:00", time: "1:25:02", bout: 1, boutTime: "2:31", team1Player: "Alexis Bayard", team1Score: 0, team2Score: 1, team2Player: "Koki Kano", type: "CA", action: "Kano contre-attac." },
            { linkTime: "1:25:47", time: "1:25:51", bout: 1, boutTime: "1:49", team1Player: "Alexis Bayard", team1Score: 1, team2Score: 1, team2Player: "Koki Kano", type: "PR", action: "Bayard parade-riposte." },
            { linkTime: "1:27:37", time: "1:27:38", bout: 1, boutTime: "0:30", team1Player: "Alexis Bayard", team1Score: 1, team2Score: 2, team2Player: "Koki Kano", type: "FL", action: "Kano fleche." },

            // Fencer change
            { linkTime: "1:28:21", time: "1:28:21", bout: 1, boutTime: "0:00", team1Player: "Alexis Bayard", team1Score: 1, team1PlayerScore: 1, team2PlayerScore: 2, team2Score: 2, team2Player: "Koki Kano", action: "Bout end. Fencer Change: Asami enters, Hauri enters.", isFencerChange: true, changeDuration: 1.15 },

            // Bout: Hauri (SUI) vs Asami (JAP)
            { linkTime: "1:30:09", time: "1:30:11", bout: 2, boutTime: "2:20", team1Player: "Ian Hauri", team1Score: 2, team2Score: 2, team2Player: "Selya Asami", type: "A", action: "Hauri attack-au-fer." },
            { linkTime: "1:31:06", time: "1:31:07", bout: 2, boutTime: "1:35", team1Player: "Ian Hauri", team1Score: 2, team2Score: 3, team2Player: "Selya Asami", type: "FL", action: "Asami fleche." },
            { linkTime: "1:32:01", time: "1:32:03", bout: 2, boutTime: "0:54", team1Player: "Ian Hauri", team1Score: 2, team2Score: 4, team2Player: "Selya Asami", type: "A", action: "Asami sur preparation." },
            { linkTime: "1:33:06", time: "1:33:08", bout: 2, boutTime: "0:04", team1Player: "Ian Hauri", team1Score: 3, team2Score: 5, team2Player: "Selya Asami", type: "DT", action: "Hauri attac, double touche, Asami." },

            // Fencer change
            { linkTime: "1:33:23", time: "1:33:23", bout: 2, boutTime: "0:00", team1Player: "Ian Hauri", team1Score: 3, team1PlayerScore: 2, team2PlayerScore: 3, team2Score: 5, team2Player: "Selya Asami", action: "Bout end. Fencer Change: Yamada enters, Malcotti enters.", isFencerChange: true, changeDuration: 1.05 },

            // Bout: Malcotti (SUI) vs Yamada (JAP)
            { linkTime: "1:35:09", time: "1:35:10", bout: 3, boutTime: "2:01", team1Player: "Lucas Malcotti", team1Score: 4, team2Score: 6, team2Player: "Masaru Yamada", type: "DT", action: "Passivité, double carton rouge.", isCard: "doublered" },
            { linkTime: "1:35:47", time: "1:35:47", bout: 3, boutTime: "1:44", team1Player: "Lucas Malcotti", team1Score: 4, team2Score: 7, team2Player: "Masaru Yamada", type: "PR", action: "Yamada parade-riposte." },
            { linkTime: "1:36:34", time: "1:36:35", bout: 3, boutTime: "1:10", team1Player: "Lucas Malcotti", team1Score: 5, team2Score: 8, team2Player: "Masaru Yamada", type: "DT", action: "Malcotti attac, double touche, Yamada." },
            { linkTime: "1:37:10", time: "1:37:12", bout: 3, boutTime: "0:45", team1Player: "Lucas Malcotti", team1Score: 5, team2Score: 9, team2Player: "Masaru Yamada", type: "PR", action: "Yamada opposition sixte riposte." },

            // Fencer change
            { linkTime: "1:38:13", time: "1:38:13", bout: 3, boutTime: "0:00", team1Player: "Lucas Malcotti", team1Score: 5, team1PlayerScore: 2, team2PlayerScore: 4, team2Score: 9, team2Player: "Masaru Yamada", action: "Bout end. Fencer Change: Asami returns, Bayard returns.", isFencerChange: true, changeDuration: 1.183 },

            // Bout: Bayard (SUI) vs Asami (JAP)
            { linkTime: "1:39:58", time: "1:39:59", bout: 4, boutTime: "2:26", team1Player: "Alexis Bayard", team1Score: 5, team2Score: 10, team2Player: "Selya Asami", type: "PR", action: "Asami parade riposte", },
            { linkTime: "1:40:40", time: "1:40:42", bout: 4, boutTime: "2:08", team1Player: "Alexis Bayard", team1Score: 6, team2Score: 10, team2Player: "Selya Asami", type: "RM", action: "Bayard remise." },
            { linkTime: "1:41:22", time: "1:41:26", bout: 4, boutTime: "1:47", team1Player: "Alexis Bayard", team1Score: 6, team2Score: 11, team2Player: "Selya Asami", type: "PR", action: "Asami desarme riposte." },
            { linkTime: "1:43:34", time: "1:43:38", bout: 4, boutTime: "1:17", team1Player: "Alexis Bayard", team1Score: 7, team2Score: 11, team2Player: "Selya Asami", type: "CA", action: "Bayard contre-attac." },
            { linkTime: "1:44:35", time: "1:44:37", bout: 4, boutTime: "0:53", team1Player: "Alexis Bayard", team1Score: 7, team2Score: 12, team2Player: "Selya Asami", type: "CA", action: "Asami contre-attac." },
            { linkTime: "1:45:08", time: "1:45:10", bout: 4, boutTime: "0:33", team1Player: "Alexis Bayard", team1Score: 8, team2Score: 12, team2Player: "Selya Asami", type: "A", action: "Bayard attac." },
            { linkTime: "1:45:41", time: "1:45:42", bout: 4, boutTime: "0:13", team1Player: "Alexis Bayard", team1Score: 9, team2Score: 12, team2Player: "Selya Asami", type: "PR", action: "Bayard parade riposte." },

            // Fencer change
            { linkTime: "1:46:18", time: "1:46:18", bout: 4, boutTime: "0:00", team1Player: "Alexis Bayard", team1Score: 9, team1PlayerScore: 4, team2PlayerScore: 3, team2Score: 12, team2Player: "Selya Asami", action: "Bout end. Fencer Change: Kano returns, Vineis enters.", isFencerChange: true, changeDuration: 0.7 },

            // Bout: Vineis (SUI) vs Kano (JAP)
            { linkTime: "1:47:52", time: "1:47:54", bout: 5, boutTime: "2:09", team1Player: "Sven Vineis", team1Score: 9, team2Score: 13, team2Player: "Koki Kano", type: "A", action: "Kano attac dérobat." },
            { linkTime: "1:48:40", time: "1:48:42", bout: 5, boutTime: "1:32", team1Player: "Sven Vineis", team1Score: 9, team2Score: 14, team2Player: "Koki Kano", type: "CA", action: "Kano contre-attac." },
            { linkTime: "1:49:58", time: "1:50:00", bout: 5, boutTime: "1:13", team1Player: "Sven Vineis", team1Score: 10, team2Score: 14, team2Player: "Koki Kano", type: "A", action: "Vineis attac." },
            { linkTime: "1:50:17", time: "1:50:18", bout: 5, boutTime: "1:02", team1Player: "Sven Vineis", team1Score: 11, team2Score: 15, team2Player: "Koki Kano", type: "DT", action: "Kano fleche, double touche, Vineis." },
            { linkTime: "1:50:43", time: "1:50:45", bout: 5, boutTime: "0:45", team1Player: "Sven Vineis", team1Score: 12, team2Score: 16, team2Player: "Koki Kano", type: "DT", action: "Vineis attac, double touche, Kano." },
            { linkTime: "1:51:26", time: "1:51:27", bout: 5, boutTime: "0:16", team1Player: "Sven Vineis", team1Score: 12, team2Score: 17, team2Player: "Koki Kano", type: "PR", action: "Kano parade riposte." },

            // Fencer change
            { linkTime: "1:51:58", time: "1:51:58", bout: 5, boutTime: "0:00", team1Player: "Sven Vineis", team1Score: 12, team1PlayerScore: 3, team2PlayerScore: 5, team2Score: 17, team2Player: "Koki Kano", action: "Bout end. Fencer Change: Yamada returns, Hauri returns.", isFencerChange: true, changeDuration: 1.167 },

            // Bout: Hauri (SUI) vs Yamada (JAP) - Swiss comeback
            { linkTime: "1:53:50", time: "1:53:52", bout: 6, boutTime: "2:17", team1Player: "Ian Hauri", team1Score: 13, team2Score: 18, team2Player: "Masaru Yamada", type: "DT", action: "Yamada attac sur preparation, double touche, Hauri." },
            { linkTime: "1:54:25", time: "1:54:27", bout: 6, boutTime: "1:59", team1Player: "Ian Hauri", team1Score: 13, team2Score: 19, team2Player: "Masaru Yamada", type: "CA", action: "Yamada contre-attac." },
            { linkTime: "1:55:01", time: "1:55:03", bout: 6, boutTime: "1:34", team1Player: "Ian Hauri", team1Score: 14, team2Score: 19, team2Player: "Masaru Yamada", type: "PR", action: "Hauri parade riposte." },
            { linkTime: "1:55:32", time: "1:55:35", bout: 6, boutTime: "1:14", team1Player: "Ian Hauri", team1Score: 15, team2Score: 19, team2Player: "Masaru Yamada", type: "CA", action: "Hauri contre-attac." },
            { linkTime: "1:56:03", time: "1:56:05", bout: 6, boutTime: "1:01", team1Player: "Ian Hauri", team1Score: 16, team2Score: 19, team2Player: "Masaru Yamada", type: "A", action: "Hauri attac composé." },
            { linkTime: "1:56:17", time: "1:56:18", bout: 6, boutTime: "0:59", team1Player: "Ian Hauri", team1Score: 17, team2Score: 19, team2Player: "Masaru Yamada", type: "PCR", action: "Hauri parade contre-riposte." },
            { linkTime: "1:56:45", time: "1:56:47", bout: 6, boutTime: "0:38", team1Player: "Ian Hauri", team1Score: 18, team2Score: 19, team2Player: "Masaru Yamada", type: "A", action: "Hauri attac." },
            { linkTime: "1:57:18", time: "1:57:20", bout: 6, boutTime: "0:27", team1Player: "Ian Hauri", team1Score: 18, team2Score: 20, team2Player: "Masaru Yamada", type: "CA", action: "Yamada contre-attac." },
            { linkTime: "1:57:39", time: "1:57:40", bout: 6, boutTime: "0:17", team1Player: "Ian Hauri", team1Score: 19, team2Score: 20, team2Player: "Masaru Yamada", type: "CA", action: "Hauri contre-attac." },

            // Fencer change
            { linkTime: "1:58:47", time: "1:58:47", bout: 6, boutTime: "0:00", team1Player: "Ian Hauri", team1Score: 19, team1PlayerScore: 7, team2PlayerScore: 3, team2Score: 20, team2Player: "Masaru Yamada", action: "Bout end. Fencer Change: Asami returns, Vineis returns.", isFencerChange: true, changeDuration: 0.7 },

            // Bout: Vineis (SUI) vs Asami (JAP)
            { linkTime: "2:00:43", time: "2:00:45", bout: 7, boutTime: "2:08", team1Player: "Sven Vineis", team1Score: 20, team2Score: 21, team2Player: "Selya Asami", type: "DT", action: "Vineis attac, double touche, Asami." },
            { linkTime: "2:03:14", time: "2:03:15", bout: 7, boutTime: "1:27", team1Player: "Sven Vineis", team1Score: 21, team2Score: 21, team2Player: "Selya Asami", type: "PR", action: "Vineis parade riposte." },
            { linkTime: "2:04:12", time: "2:04:14", bout: 7, boutTime: "0:49", team1Player: "Sven Vineis", team1Score: 21, team2Score: 22, team2Player: "Selya Asami", type: "FL", action: "Asami fleche." },
            { linkTime: "2:06:10", time: "2:06:11", bout: 7, boutTime: "0:33", team1Player: "Sven Vineis", team1Score: 21, team2Score: 23, team2Player: "Selya Asami", type: "A", action: "Asami attac." },

            // Fencer change
            { linkTime: "2:07:03", time: "2:07:03", bout: 7, boutTime: "0:00", team1Player: "Sven Vineis", team1Score: 21, team1PlayerScore: 2, team2PlayerScore: 3, team2Score: 23, team2Player: "Selya Asami", action: "Bout end. Fencer Change: Yamada returns, Bayard returns.", isFencerChange: true, changeDuration: 0.933 },

            // Bout: Bayard (SUI) vs Yamada (JAP)
            { linkTime: "2:08:36", time: "2:08:38", bout: 8, boutTime: "2:21", team1Player: "Alexis Bayard", team1Score: 22, team2Score: 24, team2Player: "Masaru Yamada", type: "DT", action: "Bayard attac, double touche Yamanda." },
            { linkTime: "2:09:50", time: "2:09:52", bout: 8, boutTime: "1:44", team1Player: "Alexis Bayard", team1Score: 22, team2Score: 25, team2Player: "Masaru Yamada", type: "A", action: "Yamada attac coupé." },
            { linkTime: "2:10:22", time: "2:10:24", bout: 8, boutTime: "1:22", team1Player: "Alexis Bayard", team1Score: 23, team2Score: 25, team2Player: "Masaru Yamada", type: "A", action: "Bayard attac composé." },
            { linkTime: "2:10:53", time: "2:10:55", bout: 8, boutTime: "1:00", team1Player: "Alexis Bayard", team1Score: 24, team2Score: 26, team2Player: "Masaru Yamada", type: "A", action: "Bayard attac, double touche Yamanda." },
            { linkTime: "2:11:28", time: "2:11:29", bout: 8, boutTime: "0:38", team1Player: "Alexis Bayard", team1Score: 25, team2Score: 26, team2Player: "Masaru Yamada", type: "A", action: "Bayard attac." },

            // Fencer change
            { linkTime: "2:12:17", time: "2:12:17", bout: 8, boutTime: "0:00", team1Player: "Alexis Bayard", team1Score: 25, team1PlayerScore: 4, team2PlayerScore: 3, team2Score: 26, team2Player: "Masaru Yamada", action: "Bout end. Fencer Change: Kano returns, Hauri returns.", isFencerChange: true, changeDuration: 1.583 },
            // { linkTime: "2:13:19", time: "2:13:19", bout: 9, boutTime: "3:00", team1Player: "Ian Hauri", team2Player: "Masaru Yamada", action: "Hauri Carton Jaune", isCard: "yellow", teamCard: 1},

            // Final bout: Hauri (SUI) vs Kano (JAP)
            { linkTime: "2:14:20", time: "2:14:21", bout: 9, boutTime: "2:30", team1Player: "Ian Hauri", team1Score: 26, team2Score: 26, team2Player: "Koki Kano", type: "A", action: "Hauri attac." },
            { linkTime: "2:14:56", time: "2:14:58", bout: 9, boutTime: "2:11", team1Player: "Ian Hauri", team1Score: 26, team2Score: 27, team2Player: "Koki Kano", type: "A", action: "Kano attac." },
            { linkTime: "2:17:50", time: "2:17:52", bout: 9, boutTime: "1:25", team1Player: "Ian Hauri", team1Score: 27, team2Score: 27, team2Player: "Koki Kano", type: "CA", action: "Hauri contre-attac." },
            { linkTime: "2:18:08", time: "2:18:09", bout: 9, boutTime: "1:21", team1Player: "Ian Hauri", team1Score: 28, team2Score: 28, team2Player: "Koki Kano", type: "DT", action: "Kano fleche, double touche Hauri." },
            { linkTime: "2:18:36", time: "2:18:36", bout: 9, boutTime: "1:07", team1Player: "Ian Hauri", team1Score: 29, team2Score: 29, team2Player: "Koki Kano", type: "DT", action: "Kano fleche, double touche Hauri." },
            { linkTime: "2:19:09", time: "2:19:10", bout: 9, boutTime: "0:56", team1Player: "Ian Hauri", team1Score: 29, team2Score: 30, team2Player: "Koki Kano", type: "CA", action: "Kano contre-attac." },
            { linkTime: "2:19:26", time: "2:19:27", bout: 9, boutTime: "0:53", team1Player: "Ian Hauri", team1Score: 29, team2Score: 31, team2Player: "Koki Kano", type: "FL", action: "Kano fleche sur preparation." },
            { linkTime: "2:19:46", time: "2:19:48", bout: 9, boutTime: "0:43", team1Player: "Ian Hauri", team1Score: 30, team2Score: 32, team2Player: "Koki Kano", type: "DT", action: "Hauri attac, double touche Kano." },
            { linkTime: "2:20:09", time: "2:20:10", bout: 9, boutTime: "0:34", team1Player: "Ian Hauri", team1Score: 31, team2Score: 33, team2Player: "Koki Kano", type: "FL", action: "Kano fleche, double touche Hauri." },
            { linkTime: "2:20:33", time: "2:20:33", bout: 9, boutTime: "0:28", team1Player: "Ian Hauri", team1Score: 32, team2Score: 33, team2Player: "Koki Kano", type: "FL", action: "Hauri fleche coupé." },
            { linkTime: "2:20:48", time: "2:20:49", bout: 9, boutTime: "0:25", team1Player: "Ian Hauri", team1Score: 33, team2Score: 33, team2Player: "Koki Kano", type: "PR", action: "Hauri parade riposte remise." },
            { linkTime: "2:21:10", time: "2:21:11", bout: 9, boutTime: "0:22", team1Player: "Ian Hauri", team1Score: 34, team2Score: 33, team2Player: "Koki Kano", type: "A", action: "Hauri attac." },
            { linkTime: "2:22:29", time: "2:22:31", bout: 9, boutTime: "0:14", team1Player: "Ian Hauri", team1Score: 35, team2Score: 33, team2Player: "Koki Kano", type: "PR", action: "Hauri parade riposte." },
            { linkTime: "2:22:56", time: "2:22:57", bout: 9, boutTime: "0:11", team1Player: "Ian Hauri", team1Score: 35, team2Score: 34, team2Player: "Koki Kano", type: "PCR", action: "Kano parade contre-riposte." },
            { linkTime: "2:23:25", time: "2:23:27", bout: 9, boutTime: "0:06", team1Player: "Ian Hauri", team1Score: 36, team2Score: 35, team2Player: "Koki Kano", type: "DT", action: "Kano parade riposte, double touche Hauri." },
            { linkTime: "2:23:45", time: "2:23:46", bout: 9, boutTime: "0:04", team1Player: "Ian Hauri", team1Score: 36, team2Score: 36, team2Player: "Koki Kano", type: "PR", action: "Kano parade riposte." },

            // Bout end, sudden death
            { linkTime: "2:24:18", time: "2:24:18", bout: 9, boutTime: "0:00", team1Player: "Ian Hauri", team1Score: 36, team1PlayerScore: 11, team2PlayerScore: 10, team2Score: 36, team2Player: "Koki Kano", action: "Morte subite, Kano priorité.", isFencerChange: true, changeDuration: 0.483 },

            // Sudden death
            { linkTime: "2:25:19", time: "2:25:20", bout: 10, boutTime: "0:48", team1Player: "Ian Hauri", team1Score: 36, team2Score: 37, team2Player: "Koki Kano", type: "FL", action: "Kano fleche", isSuddenDeath: true }
        ];
