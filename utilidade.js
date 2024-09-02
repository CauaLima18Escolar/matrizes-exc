export function somarMatrizes(M1, M2){
    const result_M = []

    for(let lineIndex = 0; lineIndex < M1.length; lineIndex++){
        const support_M = []

        for(let columnIndex = 0; columnIndex < M1[lineIndex].length; columnIndex++){
            support_M.push(M1[lineIndex][columnIndex] + M2[lineIndex][columnIndex])
        }

        result_M.push(support_M);
    }

    return result_M;
}